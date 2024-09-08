// Merge Two Sorted Arrays
// Question: Write a function to merge two sorted arrays into one sorted array.
// Example Input: ([1, 3, 5], [2, 4, 6])
// Example Output: [1, 2, 3, 4, 5, 6]
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]

const mergeTwoSortedArray = (arr1, arr2) => {
  let result = []
  //two pointers
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  // If there are remaining elements in arr1, add them to the result
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  // If there are remaining elements in arr2, add them to the result
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}
let result = mergeTwoSortedArray(arr1, arr2)
console.log(result)
