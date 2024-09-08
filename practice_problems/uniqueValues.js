// Unique Values
// Question: Write a function that takes an array of numbers and returns an array of only the unique numbers (i.e., no duplicates).
// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Example Output: [1, 2, 3, 4, 5]

let input = [1, 2, 2, 3, 4, 4, 5]
const uniqueValues = (input) => {
  return input.filter((element, index) => {
    return input.indexOf(element) === index
  })
}
let output = uniqueValues(input)
console.log(output)
