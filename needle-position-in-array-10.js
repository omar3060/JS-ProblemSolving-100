// function findNeedle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'needle') {
//       return `found the needle at position ${i}`
//     } else {
//       return 'There is no needle in array'
//     }
//   }
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))


function findNeedle(arr) {
  let index = arr.indexOf('needle') 
  return index == -1 ? 'There is no needle in array' : `found the needle at position ${index + 1}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "needle", "moreJunk",  "randomJunk"]))

// function findNeedle(arr) {
//   let needleIndex = arr.findIndex((item) => (
//     item == 'needle'
//   ))
//   return `found the needle at position ${needleIndex}`
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
