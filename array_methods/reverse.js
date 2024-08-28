/* The reverse() method in JavaScript is used to reverse the order of elements in an array. This method mutates (changes) the original array and returns the reversed array.

How it works

 1 The reverse() method inverts the order of the elements in the array, such that the first    element becomes the last, the second becomes the second-to-last, and so on.
 2 This operation is done in place, meaning that the original array is modified.
 3 it take no arguments

Mutating the Original Array:
The reverse() method modifies the original array directly.
reverse() changes the original array. If you need to keep the original array intact, you should make a copy of it first.

*/
// reverse the array with copy .
let numbers = [1, 2, 3, 4, 5]
let revsredArray = [...numbers].reverse()
console.log(revsredArray)
//  this will print the original arry  [1,2,3,4,5]
console.log(numbers)

// this will directly modify the original array.
let withoutCopy = numbers.reverse()
// output -- > [5,4,3,2,1]
console.log(withoutCopy)
// output -- > [5,4,3,2,1]
console.log(numbers)
