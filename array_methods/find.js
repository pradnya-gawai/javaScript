/* Purpose:

The find() method is used to retrieve the first element in an array that satisfies a specified testing function.
It iterates over each element of the array and returns the value of the first element for which the testing function returns true.
If no element satisfies the condition, the method returns undefined.

 Parameter
 callback: A function that is executed on each element in the array. It takes three arguments:
   element: The current element being processed.
   index: The index of the current element.
   array: The array on which find was called.
thisArg (optional): A value to use as this when executing the callback.


Key Points:

find() iterates over the array, calling the callback function for each element.
If the callback returns true for an element, find() immediately returns the value of that element and stops iterating.
If no element satisfies the test, find() returns undefined.
find() does not modify the original array.

Additional Considerations:
find() is a convenient way to find a specific element in an array based on a condition.
It's often used in conjunction with other array methods like map(), filter(), and reduce().
If you need to find the index of the first matching element, use findIndex(). */

// Example 1: Finding a Number
let numbers = [10, 20, 30, 40, 50, 60]
let findDivisibleByThree = numbers.find((number) => number % 3 == 0)
// Output: 30
console.log(findDivisibleByThree)

// Example 2: Finding an Object in an Array
const users = [
  { id: 1, name: 'Pradnya' },
  { id: 2, name: 'Chetan' },
  { id: 3, name: 'Mansi' },
]
let findUser = users.find((user) => user.name == 'Chetan')
// Output: { id: 2, name: 'Chetan' }
console.log(findUser)
// Example 3: Handling undefined
const result = users.find((user) => user.name === 'Thor')
console.log(result) // Output: undefined
