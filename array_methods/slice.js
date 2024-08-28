/* The Array.prototype.slice() method in JavaScript is used to create a shallow copy of a portion of an array into a new array object, selected from the start index to the end index (excluding the end index). It does not modify the original array.

Parameters
start (optional): The zero-based index at which to start extraction. If omitted or undefined, it defaults to 0. If negative, it counts back from the end of the array.

end (optional): The zero-based index before which to end extraction. The element at this index is not included. If omitted or undefined, it defaults to the end of the array. If negative, it counts back from the end of the array.

Returns
A new array containing the extracted elements.

Summary

Purpose: Extract a portion of an array or create a copy of an array.
Parameters:
start: Starting index (optional).
end: Ending index (optional).
Returns: A new array with the extracted elements.
Non-destructive: slice does not modify the original array
*/

// Scenario: Extract a portion of an array.
const months = [
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
let extractMonths = months.slice(8, 10)
// [ 'September', 'October' ]
console.log(extractMonths)

// Scenario: Use negative indices to slice from the end of the array.

let negativeIndex = months.slice(-3, -1)
// [ 'October', 'November' ]
console.log(negativeIndex)

//3. Omit End Index
let ommitEndIndex = months.slice(5)
// ['June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(ommitEndIndex)

// 4. Using slice to Clone an Array
let cloneMonths = months.slice()
console.log(cloneMonths)
