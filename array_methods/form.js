/* The from() method in JavaScript is a static method on the Array object that creates a new array from an array-like object or iterable. It's a versatile tool for converting various data structures into arrays.

Parameters:
arrayLike: An array-like object or iterable.
mapFn (optional): A function to be called for each element in the array. The function receives three arguments: the element value, the index, and the array itself.
thisArg (optional): The value to be passed as the this argument when calling mapFn.

Return Value:
A new array created from the arrayLike object or iterable.

Key Points:

The from() method provides a more flexible way to create arrays compared to the traditional Array constructor.
It can be used with various data structures, including array-like objects and iterables.
The mapFn parameter allows you to transform the elements of the created array.
The from() method is a static method on the Array object, so you call it as Array.from()

Additional Notes:
The from() method is a powerful tool for working with different data types and converting them into arrays.
It can be used in conjunction with other array methods to perform complex operations.
*/

const obj = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
}
let words =
  Array.from({ length: 10 }, (value, index) => {
    obj[index]
  }) /
  /*  output[
    ('zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine')
  ] */
  console.log(words)
/* ouput  {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten'
} */
console.log(obj)
