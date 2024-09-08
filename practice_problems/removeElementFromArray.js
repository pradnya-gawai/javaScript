// Question: Write a function that removes all occurrences of a specific element from an array.
// Example Input: ([1, 2, 3, 2, 4, 2], 2)
// Example Output: [1, 3, 4]

let input = [1, 2, 3, 2, 4, 2]
let element = 2
const removeElement = (array, element) => {
  return array.filter((value) => value != element)
}

let result = removeElement(input, element)
console.log(result)
