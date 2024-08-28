/*
The Array.prototype.push() method in JavaScript adds one or more elements to the end of an array and returns the new length of the array.


Parameters:
element1, element2, ...: The elements to be added to the end of the array. You can add multiple elements in a single call.

Returns
The new length of the array after the elements have been added.

Key Points:

The push() method modifies the original array directly.
It returns the new length of the array, which can be useful if you need to know the updated size.
You can add multiple elements to the array in a single call.
The push() method is often used to add elements to the end of an array dynamically.

Additional Notes:
The push() method is a destructive operation, meaning it changes the original array.
It can be used in conjunction with other array methods to manipulate arrays.

*/

let mixArray = [0, true, 'String']
newLenght = mixArray.push({ 1: 'one' })
// output [ 0, true, 'String', { '1': 'one' } ]
console.log(mixArray)
// output 4
console.log(newLenght)
