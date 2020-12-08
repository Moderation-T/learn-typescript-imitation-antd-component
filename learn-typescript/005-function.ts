/**
 *
 *
 * @param {number} x
 * @param {number} y
 * @param {number} [z] 可选参数 z
 * @returns {number}
 */
function add(x: number, y: number, z?: number): number {
  if (z) {
    return x + y + z
  }

  return x + y
}

let result = add(2, 1, 3);

const add2 = function (x: number, y: number, z?: number): number {
  if (z) {
    return x + y + z
  }
  return x + y
}

// 将 add 赋值给 add3
let add3: (x: number, y: number, z?: number) => number = add;
add3 = add2;