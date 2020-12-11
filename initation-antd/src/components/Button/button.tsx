import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

type BtnType = 'default' | 'primary' | 'danger' | 'link';
type Size = 'lg' | 'sm';

interface BaseButtonProps {
  children: React.ReactNode,
  className?: string,
  btnType?: BtnType,
  href?: string
  size?: Size,
  color?: string,
  disabled?: boolean,
}

// 封装的按钮组件拥有自定义的 props 和 button 的所有 props
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// 封装的按钮组件拥有自定义的 props 和 a 的所有 props
type NativeAnchorProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 不需要符合所有的 type 包含其中一种即可
export type ButtonProps = Partial<NativeAnchorProps & NativeButtonProps>

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': btnType === 'link' && disabled
  })

  if (btnType === 'link') {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>)
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}


export default Button