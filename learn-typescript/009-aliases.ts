// type aliases 类型别名
function plus(x: number, y: number): number {
  return x + y
}

type PlusType = (x: number, y: number) => number

const sum: PlusType = plus

// 联合类型时使用
// 传入的参数为 string 或者 function ，若为 string 直接返回，若为 function 返回执行结果

type FunReturnStr = () => string
type StringOrFucResult = string | FunReturnStr

function getString(str: StringOrFucResult) {
  if (typeof str === 'string') {
    return str
  } else { return str() }
}

getString('123')
getString(() => { return '134 ' })


// type assertion 类型断言

function getLength(input: number | string) {
  // input 人工看成 string 类型就可以使用 string 的方法了
  const str = input as String;
  if (str.length) {
    return str.length
  } else {
    const num = input as Number;
    return num.toString().length;
  }
}

function getLength2(input: number | string) {
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}