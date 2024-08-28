/*
The splice() method modifies the original array directly.

method in JavaScript is versatile and can be used for several array operations: adding elements, removing elements, or both. It modifies the original array and returns an array containing the removed elements.

Parameters:
start: The index at which to start modifying the array. If start is negative, it is treated as array.length + start.

deleteCount: The number of elements to remove from the array starting at start. If omitted or if its value is greater than the number of elements from start to the end of the array, all elements from start to the end of the array will be removed.

item1, item2, ..., itemN: The elements to add to the array starting at start. If no elements are provided, splice() only removes elements.

Return Value:
A new array containing the removed elements, or an empty array if no elements were removed.
Key Points:

The splice() method modifies the original array directly.

It can be used to add, remove, or replace elements in an array.

The start and deleteCount parameters allow you to specify the range of elements to modify.
The item1, item2, ... parameters allow you to insert new elements into the array.

The splice() method returns a new array containing the removed elements, which can be useful for further processing.

Additional Notes:

The splice() method is a powerful tool for manipulating arrays in JavaScript.
It can be used in conjunction with other array methods to perform complex operations. */

// Removing element
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
// Remove 2 elements starting from index 2
const removedFruits = fruits.splice(2, 1)
console.log(fruits) // Output: [ 'Apple', 'Banana', 'Date', 'Elderberry' ]
console.log(removedFruits) // Output:[ 'Cherry' ]

// 2. Adding Elements
const colors = ['Red', 'Green', 'Blue']
// adding the element secondargument deletecount is zero
colors.splice(1, 0, 'Yellow', 'Purple')
console.log(colors) // Output: ['Red', 'Yellow', 'Purple', 'Green', 'Blue']

// 3. Replacing Elements
const numbers = [1, 2, 3, 4, 5]

// Replace 2 elements starting from index 1 with new elements
const replacedNumbers = numbers.splice(1, 2, 6, 7)

console.log(numbers) // Output: [1, 6, 7, 4, 5]
console.log(replacedNumbers) // Output: [2, 3]

// 4. Using Negative Indices
const animals = ['Cat', 'Dog', 'Elephant', 'Giraffe']

// Remove 2 elements starting from the end
const removedAnimals = animals.splice(-2, 2)

console.log(animals) // Output: ['Cat', 'Dog']
console.log(removedAnimals) // Output: ['Elephant', 'Giraffe']
