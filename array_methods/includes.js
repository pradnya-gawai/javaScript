/* The includes() method in JavaScript is used to check whether an array contains a specified element. It returns a Boolean value: true if the element is found and false if it is not.

Parameter :
valueToFind: The element to search for in the array.
fromIndex (optional): The position in the array at which to begin the search. The default is 0. If fromIndex is negative, it's taken as an offset from the end of the array.

Key points:
includes() is a case-sensitive method.
includes() can be used with arrays of any data type.
includes() can be used to check for the existence of primitive values (like numbers, strings, booleans) as well as objects.
includes() is a more efficient way to check for element existence compared to using a loop.
*/
// Example 1: Basic Usage with Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.includes(10)) //Output :false

// Example 2: Case Sensitivity with Strings
const fruits = ['apple', 'banana', 'mango', 'orange']
console.log(fruits.includes('mango')) // output :true
console.log(fruits.includes('Mango')) //output :false

// Example 3: Using fromIndex
numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.includes(3, 5)) // Output :false
console.log(numbers.includes(3, 2)) // output :true

// Example 4: Checking for NaN and undefined
const array = [NaN, 1, 2, 3, undefined]
console.log(array.includes(NaN)) // Output: true
console.log(array.includes(undefined)) // Output :true
