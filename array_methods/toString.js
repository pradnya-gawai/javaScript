/* The toString() method in JavaScript is a built-in method that converts an object into a string representation. It's a versatile method that can be used on various data types, including numbers, strings, arrays, objects, and more.


Behaviour with Array :
does not modify the original array
The toString() method converts each element in the array to a string and then concatenates them, separated by commas.
If an array contains nested arrays, the toString() method will flatten the array one level deep.

Key Points:
The toString() method is a built-in method that can be used on various data types.
It converts an object into a string representation.
The default implementation for objects typically returns "[object Object]".
You can override the toString() method for custom objects to provide a more specific string representation.

Additional Notes:
The toString() method is often used for debugging, logging, or formatting data.
It can be combined with other methods to create custom string representations.

*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let stringNumber = numbers.toString()
console.log(stringNumber) // output 1,2,3,4,5,6,7,8,9,0
console.log(typeof stringNumber) //output string
console.log(numbers) // output  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(typeof numbers) // object

const nested = [1, 2, [3, 4], 5]
const result = nested.toString()
console.log(result) // Output: "1,2,3,4,5"
