/* The Array.prototype.unshift() method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array.

Parameters:
element1, element2, ...: The elements to be added to the end of the array. You can add multiple elements in a single call.

Return Value:
The new length of the array after the elements have been added.

Key Points:
The push() method modifies the original array directly.
It returns the new length of the array, which can be useful if you need to know the updated size.
You can add multiple elements to the array in a single call.
The push() method is often used to add elements to the end of an array dynamically.

The unshift() method is useful when you need to add elements to the start of an array, effectively pushing existing elements to a higher index.



Adding New Elements: The new elements are inserted at the start of the array.
Shifting Existing Elements: All existing elements in the array are moved one position to the right. This means that their indices are increased by the number of new elements added.
Updating the Array Length: The length of the array is updated to reflect the addition of the new elements.
*/

const fruits = ['banana', 'orange']
const newLength = fruits.unshift('apple')
console.log(fruits) // Output: ['apple', 'banana', 'orange']
console.log(newLength) // Output: 3

const months = [
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
console.log(months)
let newMonths = months.unshift('January', 'February')
/* output (12)[
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
  'December')
] */
console.log(newMonths)
console.log(months)
