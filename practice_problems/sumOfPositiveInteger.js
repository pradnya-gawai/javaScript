// Question . Sum of Positive Numbers
// Question: Write a function that returns the sum of all positive numbers in an array.
// Example Input: [-3, 5, -2, 9, 0, -8, 6]
// Example Output: 20

let input = [-3, 5, -2, 9, 0, -8, 6]

const sumOfPositiveInteger = (array) => {
  return array.reduce((sum, value) => {
    if (value > 0) {
      sum += value
    }
    return sum
  }, 0)
}
console.log(sumOfPositiveInteger(input))
