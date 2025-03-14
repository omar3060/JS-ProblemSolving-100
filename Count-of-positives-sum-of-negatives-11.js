function countPositiveSumNegative(arr) {
  if (!arr || arr.length === 0) return []

  let count = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
      count++
    } else {
      sum += arr[i]
    }
  }
  return [count, sum]
}

console.log(countPositiveSumNegative([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))