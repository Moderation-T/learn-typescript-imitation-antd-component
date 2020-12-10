/**
 * @description 自定义 hook 获取鼠标位置
 * @author 唐益萍
*/

import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('add mouse position effect');

    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('destroy mouse position effect');
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return position;
}

export default useMousePosition