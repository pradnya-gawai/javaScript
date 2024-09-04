/* Binary Search is a highly efficient searching algorithm that works on sorted arrays or lists.
 It's a divide-and-conquer algorithm that repeatedly divides the search interval in half until the element is found or the interval becomes empty.

Here's how it works:

Initialization:
Set low to the index of the first element and high to the index of the last element.
Iteration:
Calculate the middle index mid as (low + high) / 2.
If the element at mid is equal to the target, return mid.
If the element at mid is less than the target, update low to mid + 1.
If the element at mid is greater than the target, update high to mid - 1.
Repeat steps 2 and 3 until low becomes greater than high.

Time Complexity:
Best case: O(1) (when the target is found in the first comparison)
Average case: O(log n)
Worst case: O(log n) (when the target is not present)

Key Points:
The array or list must be sorted for binary search to work efficiently.
Binary search is significantly faster than linear search for large datasets.
It's a fundamental algorithm used in various applications, including computer graphics, data structures, and databases.
 */

const binarySearch = (array, target) => {
  // initialization high and low
  let low = 0
  let high = array.length - 1

  // countine searching untile the range is valid
  while (low <= high) {
    // calculate the mid
    let mid = Math.floor((low + high) / 2)
    if (array[mid] == target) {
      return `element found at index ${mid}`
    }

    // if target is grater less than array[mid] value search in left half
    if (array[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return 'Not found'
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13]
const targetValue = 7

const result = binarySearch(sortedArray, targetValue)
console.log(result)
