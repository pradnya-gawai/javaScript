/* The flat() method in JavaScript is used to flatten a nested array, creating a new array with all sub-elements concatenated recursively.

Parameters:
depth (optional): The depth level to flatten the array. If not specified, it defaults to 1, which flattens the array one level deep.

Return Value:

A new array containing all elements from the original array, with nested arrays flattened recursively.

Key Points:
The flat() method creates a new array, leaving the original array unchanged.

The depth parameter specifies how many levels of nesting to flatten.

If depth is not specified, it defaults to 1, which flattens the array one level deep.

The flat() method can be chained with other array methods to create more complex operations.
Additional Notes:

The flat() method is a useful tool for working with nested arrays.
It can be used to simplify complex array structures and make them easier to process. */
const arr = [1, 2, [3, 4, [5, 6]]]

let faltterArry = arr.flat()
// [ 1, 2, 3, 4, [ 5, 6 ] ] faltterArry
console.log(faltterArry, 'faltterArry')
let fullFlat = arr.flat(2)
// [ 1, 2, 3, 4, 5, 6 ] fullFlat
console.log(fullFlat, 'fullFlat')
// [ 1, 2, [ 3, 4, [ 5, 6 ] ] ] arr
console.log(arr, 'arr')
