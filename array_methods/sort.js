/* The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. By default, sort() converts the elements to strings and sorts them in ascending order based on their UTF-16 code unit values.

parameters
compareFunction (optional): A comparison function that determines the order of elements in the array. If provided, it should take two arguments (a and b) and return:
A negative number if a should come before b.
A positive number if a should come

Key Points:
The sort() method modifies the original array directly.
The default sorting order for strings is alphabetical, and for numbers it's ascending.
You can customize the sorting order by providing a compare function.
The compare function should return a negative, positive, or zero value based on the desired order.
The sort() method returns the sorted array itself, allowing you to chain it with other array methods.

*/
let numbers = [5, 4, 3, 2, 1]

//if you make a copy  of original array then it will not get modified
let sortWithCopy = [...numbers].sort()
// output [ 5, 4, 3, 2, 1 ] original array
console.log(numbers, 'original array')
// output [ 1, 2, 3, 4, 5 ] sortWithCopy
console.log(sortWithCopy, 'sortWithCopy')

//sort without making copy will modify the original array
// output  [ 5, 4, 3, 2, 1 ] original array
console.log(numbers, 'original array')
let sortWithoutCopy = numbers.sort()
// [ 1, 2, 3, 4, 5 ] sortWithoutCopy
console.log(sortWithoutCopy, 'sortWithoutCopy')
// [ 1, 2, 3, 4, 5 ] original array
console.log(numbers, 'original array')

//  sort using comparision parameter function
let randomNumber = [21, 31, 51, 71, 41, 61]
let sortAccending = randomNumber.sort((a, b) => {
  a - b
})
// output [ 21, 31, 51, 71, 41, 61 ]
console.log(sortAccending)
let sortDecending = randomNumber.sort((a, b) => b - a)
//output  [ 71, 61, 51, 41, 31, 21 ]
console.log(sortDecending)

// sorting with strings
let fruits = ['banana', 'Apple', 'cherry']
let sortFruits = fruits.sort((a, b) =>
  b.toLowerCase().localeCompare(a.toLowerCase())
)
// output [ 'cherry', 'banana', 'Apple' ]
console.log(sortFruits)

// sort wiht array of objects
let items = [
  { name: 'Item A', value: 30 },
  { name: 'Item B', value: 10 },
  { name: 'Item C', value: 20 },
]
sortByValue = items.sort((a, b) => a.value - b.value)
/* output[
    ({ name: 'Item B', value: 10 },
    { name: 'Item C', value: 20 },
    { name: 'Item A', value: 30 })
  ] */
console.log(sortByValue)

let sortByName = items.sort((a, b) =>
  b.name.toLowerCase().localeCompare(a.name.toLowerCase())
)
/* output [
  { name: 'Item C', value: 20 },
  { name: 'Item B', value: 10 },
  { name: 'Item A', value: 30 }
] */
console.log(sortByName)
