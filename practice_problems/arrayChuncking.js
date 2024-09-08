// Question: Write a function that splits an array into chunks of a specified size.
// Example Input: ([1, 2, 3, 4, 5, 6], 2)
// Example Output: [[1, 2], [3, 4], [5, 6]]

let input = [1, 2, 3, 4, 5, 6]
let size = 2
const arrayChuncking = (array, size) => {
  let temp = []
  for (let i = 0; i < array.length; i += size) {
    temp.push(array.slice(i, i + size))
  }
  return temp
}
console.log(arrayChuncking(input, size))
