/* In JavaScript, the keys method is used to retrieve the keys (property names) of an object or the indices of an array. However, the method you use depends on the data structure you're working with. Here's a detailed look at how keys methods are used for both objects and arrays:

Object.keys() Method
Purpose: Returns an array of a given object's own enumerable property names (keys).
Syntax: Object.keys(obj)
obj: The object whose keys you want to retrieve.

2. Array.prototype.keys() Method
Purpose: Returns a new Array Iterator object that contains the keys (indices) for each index in the array.
Syntax: array.keys()
array: The array whose indices you want to retrieve.
returns iterator

Summary
Object.keys(obj): Useful for retrieving the keys of an object.
Array.prototype.keys(): Useful for retrieving the indices of an array.
These methods help in working with data structures by allowing you to access or iterate over their keys or indices. */

const fruits = ['apple', 'banana', 'cherry']
const iterator = fruits.keys()

for (let key of iterator) {
  console.log(key)
}
// Output:
// 0
// 1
// 2

const person = {
  name: 'Pradnya',
  age: 25,
  city: 'New York',
}

const keys = Object.keys(person)
console.log(keys) // Output: ['name', 'age', 'city']
