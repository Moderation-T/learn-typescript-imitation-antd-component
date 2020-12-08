let isDone: boolean = true;
let age: number = 12;
// number 也可以是二进制的
let binaryNumber: number = 0b1111;
let firstName: string = 'tang';

// 所有类型的子类型 
let un: undefined = undefined;
let nu: null = null;

// 可以赋值任何类型
let anything: any = '啥都行';

// 联合类型
let numberOrString: number | string = 'string';
numberOrString = 3;

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4];

// 类数组
function test() {
  console.log(arguments);
  const arg: IArguments = arguments;

}

// tuple(元组) 限定了数据类型的数组
let user: [string, number] = ['tang', 2]