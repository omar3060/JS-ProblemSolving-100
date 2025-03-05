// // normal way
// function positiveSum(arr) {
//   let counter = 0
//   for (let i = 0 ; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       counter += arr[i]
//     }
//   }

//   return counter
// }

// console.log(positiveSum([1,-4,7,12]))

// // best way
// function positiveSum(arr) {
//   return arr.reduce((acc, cur) => {
//     return cur > 0 ? acc + cur : acc;
//   }, 0);
// }

// console.log(positiveSum([1, -4, 7, 12]));

// // another way
// function positiveSum(arr) {
//   return arr.filter((number) => number > 0).reduce((acc, cur) => acc + cur, 0);
// }

// console.log(positiveSum([1, -4, 7, 12]));
