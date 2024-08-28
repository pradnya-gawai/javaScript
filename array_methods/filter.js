/* The filter method in JavaScript is used to create a new array containing all elements from the original array that pass a specified test implemented by a provided callback function.

It does not modify the original array but returns a new array.

Parameters:
array.filter(callback(element[, index[, array]])[, thisArg])
callback: A function that is called for each element in the array. It takes up to three arguments:
element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array filter was called upon.

thisArg (optional): A value to use as this when executing the callback function


Key Points:

filter() creates a new array, leaving the original array unchanged.
The callback function can access the element, its index, and the original array.
If the callback function returns true for an element, it is included in the new array.
If the callback function returns false for an element, it is not included in the new array.  
filter() can be chained with other array methods like map() and reduce().
*/
// 1 filtering base on condition
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Smartphone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
]
let availableProducts = products.filter((product) => product.inStock)
//   Output :[({ name: 'Laptop', price: 1000, inStock: true },
//   { name: 'Tablet', price: 300, inStock: true })]

console.log(availableProducts)
// 2 finding unique elemets in array
const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = numbers.filter(
  (value, index, self) => self.indexOf(value) === index
)
console.log(uniqueNumbers) // Output: [1, 2, 3, 4, 5]
