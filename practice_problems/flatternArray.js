// Flatten Deeply Nested Array
// Question: Write a function that flattens a deeply nested array into a single-level array.
// Example Input: [1, [2, [3, [4, [5]]]]]
// Example Output: [1, 2, 3, 4, 5]
let Input = [1, [2, [3, [4, [5]]]]]
const faltternArray = (Input) => {
  // Infinity tells flat() to keep flattening until all nested levels are resolved.
  return Input.flat(Infinity)
}
result = faltternArray(Input)
console.log(result)
