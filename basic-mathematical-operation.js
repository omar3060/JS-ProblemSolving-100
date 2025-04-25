// // solution one
// function basicOp(operation, value1, value2) {
//   return eval(`${value1} ${operation} ${value2}`)
// }

// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))

// // solution two
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value2 === 0 ? "cannot divide by zero" : value1 / value2;
//     default:
//       return "Wrong operation";
//   }
// }

// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 5, 5));
// console.log(basicOp("/", 49, 7));

// solution three "optimal solution"
function basicOp(operation, value1, value2) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
  };

  return operations[operation]
    ? operations[operation](value1, value2)
    : "Wrong operation";
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

// // solution four
// // npm install mathjs
// import {evaluate} from 'math.js'
// function basicOp(operation, value1, value2) {
//   if (operation === '/' && value2 === 0) return 'cannot divide by zero'
//   return evaluate(`${value1} ${operation} ${value2}`)
// }

// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 5, 5));
// console.log(basicOp("/", 49, 7));
