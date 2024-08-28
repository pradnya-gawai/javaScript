/*
indexOf is a method commonly found in programming languages that operate on strings, arrays, or similar data structures. Its primary purpose is to search for the first occurrence of a specific element or substring within a given sequence.
 It searches the array from the beginning to the end and returns the index of the first occurrence of the element. If the element is not found, it returns -1.

 Parameter :
target: The element or substring to be searched for.
fromIndex: (Optional) The index from which to start the search. If not specified, the search starts from the beginning of the sequence.

Returns
The index of the first occurrence of the searchElement in the array, or -1 if the element is not found. */

const numbers = [2, 5, 9, 2, 7, 5, 2]
const firstIndex = numbers.indexOf(2)
console.log(firstIndex) // Output: 0
