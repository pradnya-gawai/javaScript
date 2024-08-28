/* pop  method in JavaScript is used to remove the last element from an array and return that element.
This method modifies the array in place by removing the last item and adjusting the array’s length.
Parameters:
None
Return Value:
The removed element from the array, or undefined if the array is empty.

Key Points:
The pop() method modifies the original array directly.
It returns the removed element, which can be useful for further processing.
If the array is empty, pop() returns undefined.
The pop() method is often used to remove elements from the end of an array.

Additional Notes:
The pop() method is a destructive operation, meaning it changes the original array.
Array Length Adjustment: The array's length is automatically decreased by one.
It can be used in conjunction with other array methods to manipulate arrays.

Use Case :
The pop() method is commonly used when you need to retrieve and remove the last item from an array, such as in stack operations or when processing elements in a last-in, first-out (LIFO) manner.
 */
const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
  'Pluto', // Optional, as Pluto is classified as a dwarf planet
]
// output 9
console.log(planets.length)
let removeDwarfPlanet = planets.pop()
// output Pluto
console.log(removeDwarfPlanet)
// output 8
console.log(planets.length)

let array = []
// output undefined
console.log(array.pop())

const nestedArray = [1, [2, 3], 4]
const lastElement = nestedArray.pop()
console.log(lastElement) // Output: 4
console.log(nestedArray) // Output: [1, [2, 3]]
