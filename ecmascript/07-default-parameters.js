// --------------------------------------------------------------------------
// Default Parameters
// --------------------------------------------------------------------------

// 🔶 기본값 매개변수를 활용하고, nullish 연산자를 제거하세요.
// 참고: https://mzl.la/3JkRZBH
const randomNumber = (min, max) => {
  min = min ?? 0
  max = max ?? 10

  return Math.round(Math.random() * (max - min)) + min
}

let n1 = randomNumber()
console.log(n1, n1 >= 0 && n1 <= 10)

let n2 = randomNumber(5)
console.log(n2, n2 >= 5 && n2 <= 10)

let n3 = randomNumber(5, 7)
console.log(n3, n3 >= 5 && n3 <= 7)
