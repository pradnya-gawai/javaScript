/* The Array.isArray method in JavaScript is used to determine whether a given value is an array. It returns true if the value is an array, and false otherwise. This method is particularly useful for type checking in scenarios where you want to ensure that a value is an array before performing array-specific operations.

Parameter :
Array.isArray(value)

Yes, Array.isArray is a static method. In JavaScript, a static method is a method that belongs to the class itself rather than to instances of the class. You call static methods directly on the class, not on instances of the class.

*/

let numbers = [1, 2]
// true
console.log(Array.isArray(numbers))
// Using slice to Clone an Array
let copyArray = numbers.splice(0)
// true
console.log(Array.isArray(copyArray))
// [1,2]
console.log(copyArray)
//using of to create a empty array

let empetyArray = Array.of()
// true
console.log(Array.isArray(empetyArray))
