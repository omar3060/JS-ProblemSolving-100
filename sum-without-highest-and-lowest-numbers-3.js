// // first way
// function sumWithoutTheHighestAndLowestNumber(arr) {
//   if (arr == null || arr.length == 0) return 0;
//   return arr
//     .sort((a, b) => a - b)
//     .slice(1, arr.length - 1) // .slice(1,-1) // remove first and last ones
//     .reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
// }

// console.log(sumWithoutTheHighestAndLowestNumber([6, 2, 1, 8, 10])); // 16
// console.log(sumWithoutTheHighestAndLowestNumber([1, 1, 11, 2, 3])); // 6

// // Second way
// function sumWithoutTheHighestAndLowestNumber(arr) {
//   if (arr === null) return 0
//   let maxValue = Math.max(...arr)
//   let minValue = Math.min(...arr)
//   let filteredArray = arr.filter((item) => item != maxValue && item != minValue)
//   let newArray = filteredArray.reduce((acc, cur) => acc + cur, 0)
//   return newArray
// }

// console.log(sumWithoutTheHighestAndLowestNumber([6, 2, 1, 8, 10])); // 16
// console.log(sumWithoutTheHighestAndLowestNumber([1, 1, 11, 2, 3])); // 5

// Third way // more obtimized working on same array
function sumWithoutTheHighestAndLowestNumber(arr) {
  if (!arr || arr.length <= 2) return 0; // 2 cause it's already will remove 2 numbers at least
  let min = arr[0]
  let max = arr[0]
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    sum += num
    if (num < min) min = num
    if (num > max) max = num
  }
  return sum - min - max
}

console.log(sumWithoutTheHighestAndLowestNumber([6, 2, 1, 8, 10])); // 16
console.log(sumWithoutTheHighestAndLowestNumber([1, 1, 11, 2, 3])); // 6

