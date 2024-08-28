/* The join() method in JavaScript is used to concatenate the elements of an array into a single string. It takes an optional separator parameter that specifies the character or string to be used between the elements.

Parameters:
separator (optional): The character or string to be used as the separator between elements. If not specified, the default separator is a comma (,).

Return Value:
A new string that is created by joining the elements of the array with the specified separator.


Key Points:
The join() method does not modify the original array.

The separator parameter is optional. If not specified, the default separator is a comma.
The join() method is often used to create strings from arrays, such as for formatting data or generating HTML.

Additional Notes:
The join() method is a convenient way to convert an array into a string.
It can be used in conjunction with other array methods to perform more complex operations.

*/

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
let newJoinedString = months.join('-')
console.log(newJoinedString)

// Practical Use Cases
//  1 Creating CSV Strings:
const row = ['Pradnya', 'Gawai', 27, 'Engineer']
const csvRow = row.join(',')
console.log(csvRow) // Output: "Pradnya,Gawai,27,Engineer"

// 2 URL Query Parameters:
const params = ['search=apple', 'sort=asc', 'page=1']
const stringQuery = params.join('&')
console.log(stringQuery) // Output: "search=apple&sort=asc&page=1"

// 3 Flattening and Converting to a String:
const nestedArray = [1, [2, 3], [4, 5]]
const flatArray = nestedArray.flat() // [1, 2, 3, 4, 5]
const result = flatArray.join('-')
console.log(result) // Output: "1-2-3-4-5"
