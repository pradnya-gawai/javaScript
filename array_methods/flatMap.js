/* The flatMap method is a powerful tool in JavaScript that combines the map and flatten operations into a single step. It applies a mapping function to each element of an array, then flattens the resulting array to a single level
Parameters
callback: A function that is called for every element in the array. This function is used to transform each element.
    currentValue: The current element being processed in the array.
    index (optional): The index of the current element.
    array (optional): The array flatMap() was called upon.
thisArg (optional): Value to use as this when executing callback.

Returns
A new array with each element being the result of the callback function, flattened to a depth of 1.

Key Points:
The flatMap method first applies the callback function to each element of the array.
The callback function should return an array or an iterable object.
The resulting arrays are then flattened to a single level.
The flatMap method does not modify the original array.
*/
// Scenario: Flatten an array of arrays into a single array.
const numbers = [1, 2, 3, 4]

let doubled = numbers.flatMap((n) => [n, n * 10])
// [1, 10, 2, 20, 3, 30, 4, 40 ]
console.log(doubled)

//  2. Flattening Nested Arrays
const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
]
let faltterArry = nestedArrays.flatMap((arr) => arr)
console.log(faltterArry)

// 3. Mapping with Complex Structures
const people = [
  { name: 'Pradnya', hobbies: ['Reading', 'Swimming'] },
  { name: 'Prajakta', hobbies: ['Cooking', 'Biking'] },
]
let hobbiesList = people.flatMap((person) => person.hobbies)
// [ 'Reading', 'Swimming', 'Cooking', 'Biking' ]
console.log(hobbiesList)
