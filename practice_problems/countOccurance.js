// Count Occurrences
// Question: Write a function that takes an array and returns an object that counts the occurrences of each element.
// Example Input: ["apple", "banana", "apple", "orange", "banana"]
// Example Output: { "apple": 2, "banana": 2, "orange": 1 }

let input = ['apple', 'banana', 'apple', 'orange', 'banana']
const countFunction = (input) => {
  return input.reduce((count, item) => {
    if (count[item]) {
      count[item] += 1
    } else {
      count[item] = 1
    }
    return count
  }, {})
}
console.log(countFunction(input))
