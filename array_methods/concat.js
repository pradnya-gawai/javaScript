/* The concat() method in JavaScript is used to create a new array by joining two or more arrays. It doesn't modify the original arrays.
Parameters:
array1, array2, array3, ...: The arrays to be concatenated
Return Value:
A new array that contains all the elements from the original arrays.

Key Points:

The concat() method creates a new array, leaving the original arrays unchanged.
You can concatenate multiple arrays in a single call.
The elements from the concatenated arrays are added in the order they appear.

Additional Notes:
The concat() method is a non-destructive operation, meaning it doesn't modify the original arrays.
It can be used in conjunction with other array methods to create new arrays with specific elements.

*/

const asianLanguages = [
  'Mandarin Chinese',
  'Hindi',
  'Japanese',
  'Korean',
  'Vietnamese',
  'Thai',
  'Indonesian',
]
const europeanLanguages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Russian',
  'Italian',
  'Portuguese',
  'Polish',
  'Dutch',
  'Swedish',
]
let combinationOfLanguages = asianLanguages.concat(europeanLanguages)
// [
//   'Mandarin Chinese', 'Hindi',
//   'Japanese',         'Korean',
//   'Vietnamese',       'Thai',
//   'Indonesian',       'English',
//   'Spanish',          'French',
//   'German',           'Russian',
//   'Italian',          'Portuguese',
//   'Polish',           'Dutch',
//   'Swedish'
// ]
console.log(combinationOfLanguages)

combinationOfLanguages.forEach((value, index, array) => {
  array.push({ [index + 1]: `Hello ${value}` })
})
// [
//   ('Mandarin Chinese',
//   'Hindi',
//   'Japanese',
//   'Korean',
//   'Vietnamese',
//   'Thai',
//   'Indonesian',
//   'English',
//   'Spanish',
//   'French',
//   'German',
//   'Russian',
//   'Italian',
//   'Portuguese',
//   'Polish',
//   'Dutch',
//   'Swedish',
//   { 1: 'Hello Mandarin Chinese' },
//   { 2: 'Hello Hindi' },
//   { 3: 'Hello Japanese' },
//   { 4: 'Hello Korean' },
//   { 5: 'Hello Vietnamese' },
//   { 6: 'Hello Thai' },
//   { 7: 'Hello Indonesian' },
//   { 8: 'Hello English' },
//   { 9: 'Hello Spanish' },
//   { 10: 'Hello French' },
//   { 11: 'Hello German' },
//   { 12: 'Hello Russian' },
//   { 13: 'Hello Italian' },
//   { 14: 'Hello Portuguese' },
//   { 15: 'Hello Polish' },
//   { 16: 'Hello Dutch' },
//   { 17: 'Hello Swedish' })
// ]
console.log(combinationOfLanguages)
