// // 1 solution
// function doubleCar(str) {
//   return str.split('').map(char => char + char).join('')
// }

// console.log(doubleCar('String')) 
// console.log(doubleCar('Hello World'))
// console.log(doubleCar('1234!_'))

// // Another solution
function doubleCar(str) {
  return str.split('').map(char => char.repeat(2)).join('')
}

console.log(doubleCar('String')) 
console.log(doubleCar('Hello World'))
console.log(doubleCar('1234!_'))

// // 2 More efficient way => Avoids creating arrays, so it uses less memory.
// function doubleCar(str) {
//   let result = ""
//   for (let i = 0; i < str.length; i++) {
//     result += str[i] + str[i]
//   }
//   return result
// }

// console.log(doubleCar('String')) 
// console.log(doubleCar('Hello World'))
// console.log(doubleCar('1234!_'))

// // 3 solution
// function doubleCar(str) {
//   return str.split('').reduce((acc, char) => acc + char + char, "")
// }

// console.log(doubleCar('String')) 
// console.log(doubleCar('Hello World'))
// console.log(doubleCar('1234!_'))

// // 4 solution
// function doubleCar(str) {
//   return Array.from(str, char => char + char).join('')
// }

// console.log(doubleCar('String')) 
// console.log(doubleCar('Hello World'))
// console.log(doubleCar('1234!_'))

// // 5 solution
// function doubleCar(str) {
//   if (typeof str !== 'string') return ""
//   return str.replace(/./g, '$&$&')
// }

// console.log(doubleCar('String')) 
// console.log(doubleCar('Hello World'))
// console.log(doubleCar('1234!_'))
