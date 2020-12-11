- sass

联合属性

```scss
<!-- 定义 -- > @mixin button-size($padding-y, $padding-x, $font-size, $border-raduis) {
  padding: $padding-y $padding-x;
  font-size: $font-size;
  border-radius: $border-raduis;
}
<!-- 使用 -->
// 按钮大小
.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $border-radius-lg);
}
```

- typescript

封装组件时使其继承原本就有的方法

```js
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

const Button: React.FC<ButtonProps> = (props: ButtonProps) =>{}

// es6 用法
const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps // 得到剩余的属性
  } = props;
```
