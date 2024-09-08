//  Rotate an Array
// Question: Write a function that rotates an array by a given number of positions to the right.
// Example Input: ([1, 2, 3, 4, 5], 2)
// Example Output: [4, 5, 1, 2, 3]

const rotateArray = (array, positions) => {
  const n = array.length
  // Handle edge cases
  if (n === 0 || positions % n === 0) return array
  // Calculate effective number of positions to rotate
  // The line positions = positions % n; is used to ensure that the number of rotations is within the bounds of the array length.
  // Without modulo, rotating by 7 is the same as rotating by 2 in an array of length 5
  positions = positions % n
  console.log(positions, 'positions')
  // Separate the array into two parts
  //slice() is a JavaScript method that returns a shallow copy of a portion of an array, without modifying the original array.
  // Negative indices in slice() mean you start counting from the end of the array. So array.slice(-positions) starts positions elements from the end of the array.
  const endPart = array.slice(-positions)
  // array.slice(0, -positions) extracts all elements from the start of the array up to the element that is 2 positions from the end.
  const startPart = array.slice(0, -positions)

  // Concatenate the two parts
  const rotatedArray = endPart.concat(startPart)

  return rotatedArray
}

// Test the function
let input = [1, 2, 3, 4, 5]
let positions = 3
let result = rotateArray(input, positions)
console.log(result)
