function digitize(num) {
  // return String(num).split('').reverse().map(Number)
  return num.toString().split('').reverse().map(Number)
}

console.log(digitize(345678))
console.log(digitize(3))

// function digitize(num) {
//   return Array.from(String(num), Number).reverse()
// }

// console.log(digitize(345678))
// console.log(digitize(3))

// function digitize(num) {
//   return [...String(num)].reverse().map(digit => parseInt(digit))
// }

// console.log(digitize(345678))
// console.log(digitize(3))
// console.log(digitize(0))

// function convertToString(arr) {
//   return String(arr)
// }

// let arr = [1,2,3,4,5]
// console.log(arr.map(convertToString))







// /// tries
// let num = 23456
// console.log([...String(num)].reverse().map(digit => parseInt(digit)))

// let str = 'omar'

// console.log(str.split(''))
