/* The reduce method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It's a powerful method for aggregating data, summing values, flattening arrays, and more.

The accumulator in the reduce method is a value that accumulates the result of the callback function as it processes each element in the array. Think of it as a running total or an aggregated result that gets updated on each iteration of the array.

Parameter
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

callback: A function to execute on each element in the array. It takes four arguments:
accumulator: Accumulates the callback's return values. It's the accumulated result from the previous iterations.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element.
array (optional): The array reduce was called upon.

initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used as the initial accumulator, and the iteration will start from the second element.

 Returns
 The reduce() method in JavaScript returns the accumulated value resulting from the callback function applied to each element of the array.  

*/

// Example 1: Sum of All Numbers in an Array
const numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((acc, val, ind) => acc + val + ind)
// output : 15
console.log(sum)
let removeIndexSum = numbers.reduce((acc, val, ind) => acc + val - ind)
// Output :5
console.log(removeIndexSum)

// Example 2: Flattening an Array of Arrays
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
]

let faltternArray = nestedArray.reduce((acc, val) => {
  return acc.concat(val)
}, [])
// Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(faltternArray)

// Example 3: Counting Occurrences of Items in an Array
const fruits = [
  'apple',
  'banana',
  'orange',
  'apple',
  'orange',
  'banana',
  'banana',
]
let countFruits = fruits.reduce((acc, val, idx) => {
  acc[val] = (acc[val] || 0) + 1
  return acc
}, {})
// { apple: 2, banana: 3, orange: 2 }
console.log(countFruits)

// Example 4: Building an Object from an Array
const entries = [
  ['name', 'Pradnya'],
  ['age', 30],
  ['location', 'India'],
]
// [key, val] this is array destucting
let person = entries.reduce((acc, [key, val]) => {
  acc[key] = val
  return acc
}, {})
// { name: 'Pradnya', age: 30, location: 'India' } person
console.log(person, 'person')

// 5. Grouping Objects by Property
const people = [
  { name: 'Pradnya', department: 'HR' },
  { name: 'Chetan', department: 'Engineering' },
  { name: 'Mansi', department: 'HR' },
  { name: 'Jeet', department: 'Engineering' },
]
let groupByDept = people.reduce((acc, person) => {
  const { department } = person
  if (!acc[department]) {
    acc[department] = []
  }
  acc[department].push(person)
  return acc
}, {})
/*{
    HR: [
      { name: 'Pradnya', department: 'HR' },
      { name: 'Mansi', department: 'HR' },
    ],
    Engineering: [
      { name: 'Chetan', department: 'Engineering' },
      { name: 'Jeet', department: 'Engineering' },
    ],
  }*/
console.log(groupByDept)
