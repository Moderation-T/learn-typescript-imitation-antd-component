
// generics 泛型
// <T> 定义一个泛型叫做 T、<T> 一个占位符 不一定叫 T 叫啥都行 
// 泛型 不提前定义类型 使用的时候再定义类型

import { tuple } from "antd/lib/_util/type";

function echo<T>(arg: T): T {
  return arg;
}

const result: string = echo('666')
const numRes: number = echo(666)

function swap<T, U>(tuple: [T, U]) {
  return [tuple[0], tuple[1]]
}

const swapRes = swap(['string', 666]);

