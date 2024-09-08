// Find Missing Number in Array
// Question: Given an array containing numbers from 1 to n with one number missing, write a function to find the missing number.
// Example Input: [1, 2, 4, 5, 6]
// Example Output: 3
let Input = [1, 2, 4, 5, 6]

// mathematical approch
// The sum of the first n natural numbers is given by the formula
//sum =(n*(n-1))/2
const missing = (array) => {
  // 1 number is missing so n will be
  let n = array.length + 1
  let expectedSum = (n * (n + 1)) / 2
  const actualSum = array.reduce((sum, val) => sum + val, 0)
  return expectedSum - actualSum
}
let output = missing(Input)
console.log(output)

//here you can see the pattern
// index and next index  element is having differnt of 1
const missingElement = (array, pattern) => {
  let missingElement
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] != 1) {
      return (missingElement = array[i] + 1)
    }
  }
}
let result = missingElement(Input)
console.log(result)
