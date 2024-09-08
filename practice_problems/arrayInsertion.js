// Array Intersection
// Question: Write a function that returns the intersection of two arrays (i.e., elements present in both arrays).
// Example Input: ([1, 2, 3], [2, 3, 4])
// Example Output: [2, 3]

let Input1 = [1, 2, 3]
let Input2 = [2, 3, 4]

const arrayInsertion = (Input1, Input2) => {
  // inclues methode check weather element prest in array or not
  return Input1.filter((value) => Input2.includes(value))
}
const result = arrayInsertion(Input1, Input2)
console.log(result)
