/* The at() method is a relatively new addition to JavaScript arrays, introduced in ECMAScript 2022. It provides a more intuitive way to access elements in an array based on their index, both positive and negative.
Positive integers count from the beginning of the array, while negative integers count from the end.
Parameters:
index: The index of the element to return. If the index is negative, it counts back from the end of the array.

Return Value:
The element at the specified index, or undefined if the index is out of bounds.

Key Points:

The at() method is a more readable alternative to using array[index], especially when dealing with negative indices.
It provides a consistent way to access elements regardless of whether the index is positive or negative.
The at() method is supported in modern browsers and Node.js environments.

Additional Notes:
The at() method is not a destructive operation, meaning it does not modify the original array.
It is a convenient way to access elements in an array without worrying about potential index errors.
*/

let numbers = [10, 20, 30, 40, 50, 60, 70]
let value = numbers.at(-1)
// output 70
console.log(value)

value = 90
// output 90
console.log(value)
//  output [ 10, 20, 30, 40, 50, 60, 70]
console.log(numbers)
