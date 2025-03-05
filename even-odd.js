// // Regular way
// function even_or_odd(number) {
//     if (number % 2 === 0) {
//       return `${number} is even`
//     } else  {
//       return `${number} is odd`
//     }
// }

// console.log(even_or_odd(3));

// Best Way
function even_or_odd(number) {
  return  number % 2 === 0 ? `${number} is even` : `${number} is odd`
}

console.log(even_or_odd(4));
