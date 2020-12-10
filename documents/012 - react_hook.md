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

HOC
