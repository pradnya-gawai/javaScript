/* The reduceRight method in JavaScript is similar to reduce, but it processes the array elements from right to left, instead of left to right. This can be useful in scenarios where the order of operations affects the outcome.

callbackFunction: A function that is executed on each element of the array, taking four arguments:
 accumulator: The accumulated value returned from the previous iteration, or the initial value if provided.
 currentValue: The current element being processed in the array.
 currentIndex (optional): The index of the current element being processed.
array (optional): The array reduceRight was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback function. If not provided, the last element of the array will be used as the initial value, and the iteration will start from the second-to-last element.



Key differences between reduce() and reduceRight():

Iteration direction: reduce() iterates from left to right, while reduceRight() iterates from right to left.
Initial value: If no initial value is provided, reduce() uses the first element of the array, while reduceRight() uses the last element.
Callback arguments: Both methods provide the accumulated value, current element, index, and original array to the callback function.

*/
// use cases
// 1. Concatenating Array Elements into a String (Reversed Order)
const words = ['one', 'two', 'three']
let strReverse = words.reduceRight((acc, val) => {
  return acc + val
}, '')
// threetwoone
console.log(strReverse)

// 2 Reversing an Array
const array = [1, 2, 3, 4, 5]
let reverseArray = array.reduceRight((acc, val) => {
  acc.push(val)
  return acc
}, [])
// [ 5, 4, 3, 2, 1 ] reverseArray
console.log(reverseArray, 'reverseArray')
