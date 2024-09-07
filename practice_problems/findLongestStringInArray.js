//he reduce method is used in this case to find the longest string in an array. Let's break down why reduce is used and how it works in this context:

// Purpose of reduce
// The reduce method is used to reduce an array to a single value by iteratively applying a function to each element of the array. It accumulates results in a single value, which can be any type (number, string, object, etc.).

const array = ['short', 'tiny', 'medium', 'a very long string']
// longest is initially set to empty string
const findLongestOne = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  )
console.log(findLongestOne(array))

// using for loop
const findLongestTwo = () => {
  let temp = ''
  for (let i = 0; i < array.length; i++)
    if (array[i].length > temp.length) {
      temp = array[i]
    }
  return temp
}
console.log(findLongestTwo(array))

// using forEachLoop
const findLongestThree = (arr) => {
  let longest = '' // Initialize the longest string as an empty string
  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item // Update longest if the current string is longer
    }
  })
  return longest
}
console.log(findLongestThree(array))
