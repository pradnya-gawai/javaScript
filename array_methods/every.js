/*
 The every method is a powerful tool in JavaScript that allows you to check if every element in an array satisfies a given condition. It returns a boolean value: true if all elements meet the condition, and false if at least one element does not meet the condition
 The Array.prototype.every() method in JavaScript is used to test whether all elements in an array pass a provided function (callback). It returns true if the callback function returns a truthy value for every array element; otherwise, it returns false. The method stops executing the callback as soon as it encounters an element that does not meet the condition.

Parameters
callback (required): A function to execute on each element in the array, taking up to three arguments:

     element: The current element being processed in the array.
     index (optional): The index of the current element being processed.
     array (optional): The array every() was called upon.
thisArg (optional): A value to use as this when executing the callback function.

Return Value
true: If the callback function returns a truthy value for every element in the array.
false: If the callback function returns a falsy value for any element.
Important Notes
Early Exit: every() stops iterating through the array as soon as the callback returns a falsy value.
Empty Array: If the array is empty, every() returns true by default.
Mutation: While every() is executing, if the array is modified, it does not affect the elements that have not yet been processed.

 */
// usecases
// 1 Checking if All Elements Satisfy a Condition
const numbers = [10, 20, 30, 40, 50]
let checkArrayEvevn = numbers.every((value, index, array) => {
  return value % 2 === 0
})
// ouput flase
console.log(checkArrayEvevn)

/* Common Use Cases:
Validating user input
Verifying all elements meet a numeric condition
Checking that all items in a collection have a particular property set to true
Ensuring all elements are unique
Using a dynamic threshold to validate elements */
