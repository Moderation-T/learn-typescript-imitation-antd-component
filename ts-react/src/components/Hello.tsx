import React from 'react';

interface IHello {
  message?: string
}

// React.FC 官方定义的类型
const Hello: React.FC<IHello> = function Hello(props: IHello) {
  const { message } = props
  return <h2>{message}</h2>
}

// 默认属性
Hello.defaultProps = {
  message: 'hello world'
}

export default Hello;