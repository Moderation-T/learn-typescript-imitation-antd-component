// 定义对象
interface Person {
  // readonly 只读属性
  readonly id: number;
  name: string,
  // 可选属性 可有可无
  age?: number,
}

let me: Person = { id: 1, name: 'tang', age: 12 }