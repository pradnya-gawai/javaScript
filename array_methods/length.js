/* In JavaScript, length is a property used to determine the number of elements in an array, the number of characters in a string, or the number of elements in certain other data structures.
The length property in JavaScript does not require parentheses because it's not a function, but rather an attribute or property of certain objects.

Differences from join()
join() Method: You can specify a separator, or it defaults to a comma. If no separator is provided, join() and toString() behave the same.
toString() Method: Always uses a comma as the separator and does not allow customization.

Summary
The toString() method is a simple way to convert an array to a comma-separated string.
It's useful when you need a quick and default conversion of an array to a string without any customization of the separator.
For more control over how the array elements are joined, you would use the join() method instead.

 */
let num = [3, 3, 3, 3, 3, 3]
// this will create the itrator obejct
const values = num.values()
console.log(values)
for (value of values) {
  console.log(value)
}
// this will print the length of arry that is 6
console.log(num.length)
num = []
// this will print zero as we assgined num = empety array
console.log(num.length)

const days = [
  'Monday',
  'Tuesday',
  'Wensday',
  'Thrusday',
  'Friday',
  'Saturday',
  'Sunday',
]
console.log(days)
//  this will set the length  of days  to 3  and it will only print frist three element of array
// truncate the lenght to 3
days.length = 3
console.log(days)

// even  array is defined as constant we can still reassgin the length of array
