/* method in JavaScript is used to find the last occurrence of a specified element in an array. It searches the array backwards, from the last element to the first, and returns the index of the last occurrence of the element. If the element is not found, it returns -1.
Parameters
searchValue (string): The substring to search for within the string.
searchElement (any): The element to search for within the array.
fromIndex (number, optional): The index from which to start the search. If not specified, the search starts from the end of the string or array.


Return Value:
The index of the last occurrence of the search value or search element within the string or array, respectively.
If the search value or search element is not found, -1 is returned.
 */
const numbers = [2, 5, 3, 8, 2, 2, 3]
let IndexOfTwo = numbers.lastIndexOf(2)
// output 5
console.log(IndexOfTwo)
const lastIndex = numbers.lastIndexOf(2, 4)
// output 4 it will seach in subset of arry till index 4 [2, 5, 3, 8, 2]
console.log(lastIndex)
