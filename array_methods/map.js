/*
The map method in JavaScript is used to create a new array by applying a function to each element of an existing array. It is commonly used for transforming data, such as modifying or deriving new values from each item in the array.

map does not modify the original array

Parameters :
callbackFunction: A function that is executed on each element of the array. It takes the following arguments:
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array map was called upon.
thisArg (optional): A value to use as this when executing the callbackFunction.

Characteristics of map

Non-Destructive: map does not modify the original array. It returns a new array.
Transformation: It creates a new array by applying a function to each element.
Same Length: The resulting array has the same number of elements as the original array.

Summary
Purpose: map is used to transform each element of an array and create a new array with the transformed values.
Method Signature: array.map(callbackFunction, thisArg)
Usage: Commonly used for modifying data, extracting properties, or creating new structures from existing arrays.

*/

// 1. Basic Transformation
let numbers = [1, 2, 3, 4, 5]
let multiplyByTwo = numbers.map((ele) => ele * 2)
// [ 2, 4, 6, 8, 10 ]
console.log(multiplyByTwo)

// 2. Transforming Objects
const people = [
  { name: 'Pradnya', age: 25 },
  { name: 'Mansi', age: 30 },
  { name: 'Nisha', age: 35 },
]
let nameList = people.map((ele) => ele.name)
// [ 'Pradnya', 'Mansi', 'Nisha' ]
console.log(nameList)

// 3 Mapping to New Objects
numbers = [1, 2, 3, 4, 5]
let squreArray = numbers.map((ele) => {
  return {
    number: ele,
    squre: ele * ele,
  }
})
/* [
  { number: 1, squre: 1 },
  { number: 2, squre: 4 },
  { number: 3, squre: 9 },
  { number: 4, squre: 16 },
  { number: 5, squre: 25 }
  ]*/
console.log(squreArray)

// 4 Creating new object usinf index as key
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
let mappedMonths = months.map((ele, index) => {
  return {
    id: index + 1,
    name: ele,
  }
})
/*[
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' }
]*/
console.log(mappedMonths)
