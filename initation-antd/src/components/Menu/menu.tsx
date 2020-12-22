import React, { createContext, ReactNode, useState } from 'react';
import classNames from 'classnames';

type Mode = 'vertical' | 'horizontal'
export type OnSelectHandle = (value: string | number) => void;

interface MenuProps {
  defaultValue?: string,
  children: ReactNode,
  className?: string,
  mode?: Mode,
  style?: React.CSSProperties,
  onSelect?: OnSelectHandle
}

interface IMenuContext {
  defaultValue?: string,
  onSelect?: OnSelectHandle,
}

export const MenuContext = createContext<IMenuContext>({})

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const { defaultValue, children, className, mode, onSelect, style } = props
  const [currentValue, setCurrentValue] = useState<string | number>('');


  const classes = classNames('menu', className,
    {
      [`menu-${mode}`]: mode
    }
  )

  const onSelectHandle: OnSelectHandle = (value) => {
    setCurrentValue(value);
    if (onSelect) {
      onSelect(value);
    }
  }

  const passedContext = {
    currentValue: currentValue ? currentValue : defaultValue,
    onSelect: onSelectHandle
  }

  return <ul className={classes} style={style}>
    <MenuContext.Provider value={passedContext}>
      {children}
    </MenuContext.Provider>
  </ul>
}

Menu.defaultProps = {
  mode: 'horizontal'
}


export default Menu;

