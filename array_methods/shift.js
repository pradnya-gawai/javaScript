/* The shift() method in JavaScript is used to remove the first element from an array and returns that element. It modifies the original array in place.
Modify the original array

Parameters:
None
Return Value:
The removed element from the array, or undefined if the array is empty.

Key Points:
The shift() method modifies the original array directly.
It returns the removed element, which can be useful for further processing.
If the array is empty, shift() returns undefined.
The shift() method is often used to remove elements from the beginning of an array.

Additional Notes:
The shift() method is a destructive operation, meaning it changes the original array.
It can be used in conjunction with other array methods to manipulate arrays.

Performance Considerations

Time Complexity: shift() has a time complexity of O(n) because it has to reindex all the remaining elements after removing the first element.
Performance: Using shift() on large arrays may be less efficient compared to other methods that do not involve reindexing.

Use Cases
Queue Implementations: shift() is commonly used in queue data structures where you need to process elements in the order they were added.

Processing Data: When handling data streams or collections where the first item needs to be processed and removed.

Dynamic Lists: Managing lists where elements are dynamically added and removed from the start.

Summary
Function: Removes and returns the first element of an array.
Returns: The removed element or undefined if the array is empty.
Impact: Modifies the original array by shortening its length.
Performance: May be less efficient for large arrays due to reindexing. */

const continents = [
  'Asia',
  'Africa',
  'North America',
  'South America',
  'Antarctica',
  'Europe',
  'Australia',
]

const removedContinent = continents.shift()

console.log(removedContinent) // Output: 'Asia'
console.log(continents) // Output: ['Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']
