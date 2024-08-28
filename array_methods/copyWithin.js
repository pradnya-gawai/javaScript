/*
Purpose:
Modifies an existing array by copying a sequence of elements from one position to another within the array.
array.copyWithWithin(target, start, end)

Parameters:
target: The index at which to replace the existing elements. The copy starts at this index.
start: (Optional) The index at which to start copying elements from. Defaults to 0 if not provided.
end: (Optional) The index at which to stop copying elements from (not inclusive ,The index one after the last element to be copied.). Defaults to the end of the array if not provided.

Returns
The modified array.

How Overwriting Works
Elements at Target Index: The element at the target index will be replaced by the first element from the start index.
Subsequent Elements: Each subsequent element from the start index will overwrite the elements at the target index and beyond.
Exceeding Target Index: If there are more elements being copied than the space available from target, the copied elements will continue to overwrite the original elements beyond the end of the original array, within the bounds of the target index.

*/

const continents = [
  'Asia',
  'Africa',
  'North America',
  'South America',
  'Antarctica',
  'Europe',
  'Australia',
  'New Continet one',
  'New Continet two',
]

let arrangeContients = continents.copyWithin(0, 7, 9)
/* [
  'New Continet one',
  'New Continet two',
  'North America',
  'South America',
  'Antarctica',
  'Europe',
  'Australia',
  'New Continet one',
  'New Continet two'
]*/
console.log(arrangeContients)
console.log(continents)
