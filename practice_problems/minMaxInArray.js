//  Find Max and Min
// Question: Write a function that finds the maximum and minimum values in an array.
// Example Input: [5, 9, 3, 7, 1, 8]
// Example Output: Max: 9, Min: 1

let input = [5, 9, 3, 7, 1, 8]
const findMinMax = (input) => {
  return input.reduce(
    (acc, value) => {
      if (value > acc.max) max = value
      acc.max = value
      if (value < acc.min) acc.min = value
      return acc
    },
    { max: input[0], min: input[0] }
  )
}
console.log(findMinMax(input))
