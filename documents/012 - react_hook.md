- 为什么使用 hook

组件状态逻辑的复用

复杂组件难以理解，尤其是生命周期函数

React 组件一直是函数，使用 Hook 完全拥抱函数

- hook 是什么

- 什么时候会用 State hook

- effect hook
  纯函数：输入确定 输出就确定

无需清除的 effect：

需要清除的 effect：

```js
useEffect(() => {
  const updateMouse = (e: MouseEvent) => {
    setPositions({ x: e.clientX, y: e.clientY });
  };
  document.addEventListener('click', updateMouse);
  // 清除组件的 effect
  return () => {
    document.removeEventListener('click', updateMouse);
  };
});
```

- 自定义 hook
  将组件逻辑提取到可重用的函数中

- HOC
  高级组件就是一个函数，接受一个组件作为参数，返回一个新的组件

- ref hook

```js
// 保存状态 不同的渲染中保存值
const numRef = useRef(0);
```

```js
// componentDidUpdate
const didMountRef = useRef(false);
useEffect(() => {
  if (didMountRef.current) {
    console.log('this is update');
  } else {
    didMountRef.current = true;
  }
});
```

```js
const domRef = useState<HTMLInputElement>(null)
<input ref={domRef}>
```

- useContext

```js
// father 组件
const themes = {
  light: {
    background: '#fff',
  },
  dark: {
    background: '#000',
  },
};

export const ThemeContext = React.createContext(themes.light);

<ThemeContext.Provider value={themes.light}>
  <Son />
</ThemeContext.Provider>;


// son
import {ThemeContext} from 'father'
const theme = useContext(ThemeContext)

console.log(theme); // {background:#fff}
```

- hook 规则

只在最顶层使用 hook 

只在 React 函数中调用 hook



