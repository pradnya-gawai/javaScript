// Find the Second Largest Element
// Question: Write a function that returns the second largest element in an array.
// Example Input: [5, 1, 3, 7, 2]
// Example Output: 5

let Input = [5, 1, 3, 7, 2, 4, 5, 7]
seacondLargest = (array) => {
  let sortedArray = [...new Set(array)].sort((a, b) => b - a)
  return sortedArray[1]
}
console.log(seacondLargest(Input))
