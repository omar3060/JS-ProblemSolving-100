function makeNegative(num) {
  return Math.abs(num) * -1
  return num > 0 ? -num : num
}

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))