// function countSheeps(arrayOfSheep) {
//   let count = 0
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] == true) {
//       count++
//     }
//   }
//   return count
// }

function countSheeps(arrayOfSheep) {
  let count = 0
  arrayOfSheep.forEach(sheep => sheep === true? count++ : count)
  return count
}

console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))

// function countSheeps(arrayOfSheep) {
//   let count = 0
//   arrayOfSheep.map(item => item === true? count++ : 0 )
//   return count
// }

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(item => item == true).length
// }

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.reduce((count, sheep) => sheep === true? count + 1: count, 0)
// }

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]))