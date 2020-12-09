// 定义对象
interface Person {
  // readonly 只读属性
  readonly id: number;
  name: string,
  // 可选属性 可有可无
  age?: number,
}

let me: Person = { id: 1, name: 'tang', age: 12 }

/****************************************************/

// 对类进行定义和抽象
interface Radio {
  // void 什么都不返回
  switchRadio(): void
}

interface Battery {
  checkBatteryStatus(): void
}

// interface 也可以继承
interface RadioSon extends Radio {
  extendsRadio(): void
}

// Extends 用于(单)继承一个类（class），而 implements 用于实现一个接口(interface)。 
class Car implements Radio {
  switchRadio() { }
}

// 实现两个接口用逗号隔开
class Cellphone implements Battery, Radio {
  switchRadio() {

  };
  checkBatteryStatus() { }

}

class ExtendsRadio implements RadioSon {
  extendsRadio() { }
  switchRadio() { }
}