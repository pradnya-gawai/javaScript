/*
It modify the original array

The forEach() method in JavaScript is a powerful tool for iterating over the elements of an array. It allows you to execute a callback function for each element in the array, providing you with the element value, its index, and the array itself.


method in JavaScript is used to execute a provided function once for each array element. It is useful for performing operations on each item in an array without returning a new array.


Parameters:
callback: A function that will be called for each element in the array.
element: The current element being processed.
index: The index of the current element in the array.  
array: The array that forEach() is being called on.

Return Value:
undefined. The forEach() method does not return a value.

Historical Context
Introduced: ECMAScript 5 (December 2009)
Before ECMAScript 5, developers often used for or while loops to iterate over arrays. With the introduction of forEach(), iteration became more concise and readable, especially for simple operations on array elements


Key Points:
No Early Exit: Unlike a for loop or while loop, where you can use break or return to exit early, the forEach() method will always process every element in the array.

Callback Execution: The callback function passed to forEach() will be invoked for each element, and there is no built-in mechanism within forEach() to stop or break the iteration.


Use casees
Logging: Output values to the console or UI.

In-place Modification: Alter elements of the original array.

Side Effects: Perform actions that affect external systems or states.

Aggregation: Accumulate or compute values based on array elements.

State Management: Update component state or effects in frameworks like React.

Callback Execution: Execute functions for each element without returning a result.

Object Iteration: Iterate over object properties.
 */

const numbers = [1, 2, 3, 4, 5, 6]
let foundNumber = false
// output is number: 1 number: 2 number: 3
numbers.forEach((number) => {
  if (number < 4) {
    console.log('number:', number)
    foundNumber = true
    return // Early exit from the callback function
  }
})
if (!foundNumber) {
  console.log('No found.')
}

// Log each element being processed
numbers.forEach((number) => {
  console.log('Processing number:', number)
  if (number < 4) {
    console.log('Found number less than 4:', number)
    foundNumber = true
    return true
    // The return here only exits the current iteration of the callback function
  }
})

if (!foundNumber) {
  console.log('No number less than 4 was found.')
}

/*  Output  : Processing number: 1
Found number less than 4: 1
Processing number: 2
Found number less than 4: 2
Processing number: 3
Found number less than 4: 3
Processing number: 4
Processing number: 5
Processing number: 6 */

// for each block with all three paramaeters
let table = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let newTable = table.forEach((value, index, array) => {
  array[index] = value + (index + 1) // Modify the original array
})
// Output: [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
console.log(table)

// this will retrun undefined as for each does not create new array and its retrun undefied
console.log(newTable)
