// In JavaScript, Boolean is a function and a constructor, but not an interface.

// Key Differences:
// Boolean() as a function: It returns a primitive true or false based on the truthiness of the value.
// new Boolean() as a constructor: It creates a Boolean object, which is an object wrapper around a boolean value, but objects are always truthy in JavaScript, regardless of their internal value.

// Boolean is Not an Interface
// JavaScript does not have "interfaces" in the same way as languages like TypeScript or Java. Instead, it is a dynamic language, and Boolean is one of the built-in global objects (as a function and constructor).
let array = [1, 2, 3, 4, 5, null, undefined, 'pradnya', false]
let removedFalsey = array.filter(Boolean)
console.log(removedFalsey, 'removedFalsey')
let truthyValue = array.filter((Value) => !Boolean(Value))
console.log(truthyValue)

// Filter Non-Numeric Values
array = [1, '2', 'three', 4, 'five', 6]
let stringVaalues = array.filter((Value) => typeof Value === 'string')
console.log(stringVaalues)
