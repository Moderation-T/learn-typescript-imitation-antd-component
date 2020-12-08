class Animal {
  // 修饰符 public 所有地方都可以访问
  public name: string;
  //  private 只能在自己的类中访问
  private age: number;
  // protected 包括子女也可以访问
  // readonly 只读 不能重新赋值
  // static 静态属性 直接访问的属性和方法
  static category: string[] = ['dong', 'cat'];


  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
  static isAnimal(a) {
    return a instanceof Animal
  }
}

const human = new Animal('tangyiping');
console.log(human.run());

const snake = new Animal('sna');
Animal.isAnimal(snake) // true

/*****************/

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const dog = new Dog('doubao');
console.log(dog.run());
console.log(dog.bark());

class Cat extends Animal {
  constructor(name) {
    super(name)
  }
  run() {
    return `${this.name} miaomiao runing`
  }
}

/*****************/

const cat = new Cat('gaozai');
console.log(cat.run());

/*****************/


