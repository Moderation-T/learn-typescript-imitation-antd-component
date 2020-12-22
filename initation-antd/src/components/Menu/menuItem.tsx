import React, { ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext, OnSelectHandle } from './menu';

interface MenuItemProps {
  value: string | number,
  disabled?: boolean,
  className?: string,
  children: ReactNode,
  onSelect?: () => void,
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

  const { className, children, disabled, value, } = props


  const context = useContext(MenuContext);
  const { defaultValue, onSelect } = context;
  const onClickHandle = onSelect as OnSelectHandle;

  const classes = classNames('menu-item', className, {
    'menu-item-disabled': disabled,
    'menu-item-is-active': value === defaultValue,

  })
  return <li
    className={classes}
    onClick={() => { onClickHandle(value) }}
  >{children}</li>
}


MenuItem.defaultProps = {
  disabled: false,

}

export default MenuItem;