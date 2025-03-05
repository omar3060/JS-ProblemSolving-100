// function greet(name) {
//   if (name.toLowerCase() === 'johnny')
//     return "Hello , my love!";
//   return "Hello, " + name + "!"
// }

// console.log(greet('omar'))
// console.log(greet('Johnny'))


function greet(name) {
 return name.toLowerCase() === 'johnny' ? "Hello, my love" : `Hello, ${name}!`
}

console.log(greet('omar'))
console.log(greet('Johnny'))