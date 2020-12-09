
// generics 泛型
// <T> 定义一个泛型叫做 T、<T> 一个占位符 不一定叫 T 叫啥都行 
// 泛型 不提前定义类型 使用的时候再定义类型

import { tuple } from "antd/lib/_util/type";

/************* 简单实用 ******************/

function echo<T>(arg: T): T {
  return arg;
}

const result: string = echo('666')
const numRes: number = echo(666)

function swap<T, U>(tuple: [T, U]) {
  return [tuple[0], tuple[1]]
}

const swapRes = swap(['string', 666]);

/************* 泛型约束 ******************/

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;

}

const echoWithArrRes = echoWithArr([1, '2', 3])

interface HasLength {
  length: number
}

function echoWithLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg
}

const r1 = echoWithLength({ length: 1 })
const r2 = echoWithLength([1, 2, 3])
const r3 = echoWithLength('string')

/************* 泛型类和接口的灵活用法 ******************/

class Queue<T>{
  private data = [];
  push(item: T) {
    this.data.push(item)
  }
  pop(item: T) {
    this.data.shift();
  }
}

const q1 = new Queue<number>();
q1.push(123)
q1.pop(123)

const q2 = new Queue<string>()
q2.push('123')
q2.pop('123')


interface KeyValue<K, V> {
  key: K
  value: V
}

const kv1: KeyValue<string, number> = { key: "111", value: 111 }
const kv2: KeyValue<number, string> = { key: 111, value: "222" }

const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3]

function plus(a: number, b: number): number {
  return a + b;
}

const plusRes = plus(1, 2);

interface IPlus<T> {
  (a: T, b: T): T
}

function connect(a: string, b: string): string {
  return a + b;
}

const connectRest = connect('str', 'ing')
const p: IPlus<number> = plus
const c: IPlus<string> = connect

/************* 泛型约束 ******************/
