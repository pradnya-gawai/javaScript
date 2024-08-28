/* The fill() method in JavaScript is used to fill all elements of an array with a static value. It modifies the existing array in place.

Parameters:
value: The value to fill the array with.
start (optional): The index to start filling from. Default is 0.
end (optional): The index to stop filling at (exclusive). Default is array.length

Return Value:
Modify the original array
The modified array itself.

Key Points:
The fill() method modifies the original array directly.
The start and end parameters allow you to specify the range of elements to fill.
If start is greater than or equal to end, no elements will be filled.
The fill() method returns the modified array itself, allowing you to chain it with other array methods.

Additional Notes:
The fill() method is often used to initialize arrays with a specific value or to clear existing elements.
It can be a convenient way to create arrays with repeated values.
 */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
let filledArray = months.fill('Buzinga', 1, 3)
// output [ 'January',   'Buzinga', 'Buzinga', 'April','May','June','July',August','September', 'October','November',  'December'] filledArray
console.log(filledArray, 'filledArray')

// output [ 'January',   'Buzinga', 'Buzinga', 'April','May','June','July',August','September', 'October','November',  'December'] filledArray
console.log(months)

// Fill Entire Array:
let number = [1, 2, 3, 4, 5]
// output will be [0,0,0,0,0]
console.log(number.fill(0))

//Fill from a Specific Index:
number = [1, 2, 3, 4, 5]
// output [ 1, 2, 0, 0, 0 ]
console.log(number.fill(0, 2))

//Negative Indices:
const array = [1, 2, 3, 4]
console.log(array.fill(9, -1, 0)) // Output: [1, 2, 9, 9]

let num = [1, 2, 3, 4, 5]
let fillWithCopy = [...num].fill(0)
console.log(fillWithCopy) // Ouptut [ 0, 0, 0, 0, 0 ]
console.log(num) // Oupput  [ 1, 2, 3, 4, 5 ]
