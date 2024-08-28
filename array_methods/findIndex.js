/* Purpose: Locates the index of the first element in an array that satisfies a provided testing function.

parameter
callback: A function to execute on each element in the array. It takes three arguments:
element: The current element being processed.
index: The index of the current element.
array: The array on which findIndex was called.
thisArg (optional): A value to use as this when executing the callback.

Return Value:
The index of the first element that passes the test, or -1 if no such element is found.

Key Points:
findIndex() iterates over the array, calling the callback function for each element.
If the callback returns true for an element, findIndex() immediately returns the index of that element.
If no element satisfies the test, findIndex() returns -1.
findIndex() stops iterating as soon as it finds a matching element.


Additional Considerations:
findIndex() is a more efficient way to find the index of an element than iterating over the array manually.
It's often used in conjunction with other array methods like map(), filter(), and reduce().
If you need to find all elements that satisfy a condition, use filter() instead.
*/

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
let findMonth = (month) => month == 'January'
const findIndexOfJan = months.findIndex(findMonth)

// output 0
console.log(findIndexOfJan)

const findIndexOfDec = months.findIndex((month) => month == 'December')
// output 11
console.log(findIndexOfDec)

const users = [
  { id: 1, name: 'Pradnya' },
  { id: 2, name: 'Chetan' },
  { id: 3, name: 'Mansi' },
]

const getId = users.findIndex((user) => user.name == 'Mansi')
// output 2
console.log(getId)
