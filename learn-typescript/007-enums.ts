// enums 枚举

// 数字枚举
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);
console.log(Direction[0]);

// 字符串枚举 在前面加上 
// const 变成常量枚举 编译时提高了性能 不会把枚举编译成 js 代码
// 只有常量值可以进行常量枚举
const enum Color {
  Red = 'RED',
  Yellow = 'YELLOW',
  Blue = 'BLUE',
}

const value = 'RED';
if (value === Color.Red) {
  console.log(`now is ${Color.Red}`);
}