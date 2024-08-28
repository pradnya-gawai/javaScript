/*
for (let element of array) {
  // Code to be executed for each element

Returns
A new array instance containing the provided elements.


Summary
Purpose: Array.of() creates a new array instance with a given set of elements, without any special handling of a single numeric argument.
Consistent Behavior: Unlike the Array constructor, Array.of() always treats its arguments as elements of the new array.
Use Cases: Useful when you want to create arrays with specific elements and avoid potential confusion with the Array constructor.
Array.of() is a straightforward and reliable way to create arrays, especially when you want to ensure that your arguments are interpreted as array elements, regardless of their type or quantity.
*/

// 1 creating an Array with Different Types of Elements
const arryList = Array.of(1, 2, 3, '554')
// output [ 1, 2, 3, '554' ]
console.log(arryList)

// 2. Creating an Array with a Single Element
let arr = Array.of(2210)
console.log(arr)

// 3. Creating an Empty Array
const emptyArray = Array.of()
// output  []
console.log(emptyArray)

//  4 Comparison with the Array Constructor
const arr1 = Array.of(7)
const arr2 = Array(7)
// output 7
console.log(arr1)
arr2.splice(1, 2, 10, 20)
// output [ <1 empty item>, 10, 20, <4 empty items> ]
console.log(arr2)
