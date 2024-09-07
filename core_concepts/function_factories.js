/* Why Function Factories are Useful:

Code Reusability:
Instead of writing multiple similar functions, you can write one factory function that generates all the variations.
For example, instead of manually creating functions to double or triple a number, you use makeMultiplier to generate those functions dynamically.

Customization:
Function factories allow you to create highly customized functions on the fly based on specific needs.
You can generate as many variations of a function as needed, with different preset arguments.

Simplifies Complex Logic:
Complex logic can be encapsulated within the factory function, leaving the generated functions simple and easy to use.

Maintains Clean Code:
By using closures, you avoid global variables and keep your code modular and clean.
The factory function and its closures handle the complexity, making the resulting functions easy to use. */

// Function factory to create methods for finding the longest string
const createLongestStringFinder = (method) => {
  return (arr) => {
    if (method === 'reduce') {
      return arr.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        ''
      )
    } else if (method === 'for') {
      let temp = ''
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > temp.length) {
          temp = arr[i]
        }
      }
      return temp
    } else if (method === 'forEach') {
      let longest = ''
      arr.forEach((item) => {
        if (item.length > longest.length) {
          longest = item
        }
      })
      return longest
    } else {
      throw new Error('Unsupported method')
    }
  }
}

// Create specific functions using the factory
const findLongestUsingReduce = createLongestStringFinder('reduce')
const findLongestUsingFor = createLongestStringFinder('for')
const findLongestUsingForEach = createLongestStringFinder('forEach')

// Test the functions
const array = ['short', 'tiny', 'medium', 'a very long string']
console.log(findLongestUsingReduce(array)) // Output: 'a very long string'
console.log(findLongestUsingFor(array)) // Output: 'a very long string'
console.log(findLongestUsingForEach(array)) // Output: 'a very long string'
