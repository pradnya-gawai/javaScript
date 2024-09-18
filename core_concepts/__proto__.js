// The __proto__ property is an internal property of JavaScript objects that 
// points to the object's prototype. It allows you to access and modify the prototype chain of an object directly.
//  However, its use is generally discouraged in favor of more modern and standardized methods. 
// Here’s when and how you might use __proto__, along with why it’s generally best to avoid it:

// When to Use __proto__
// 1 Exploration and Debugging:
// When you're learning or debugging JavaScript, you might use __proto__ to inspect and understand the prototype chain of an object.
let obj = {}
console.log(obj.__proto__); // Logs the prototype of obj (which is Object.prototype)

// Polyfilling or Legacy Code:
// In legacy codebases where __proto__ is used (especially before Object.setPrototypeOf and 
//     Object.getPrototypeOf were widely supported), you might encounter it.
let animal = {
  speak() {
    console.log('Animal speaks');
  }
};

const dog = {
  bark() {
    console.log('Dog barks');
  }
};

dog.__proto__ = animal;
dog.speak(); // Animal speaks
dog.bark();  // Dog barks


// Why to Avoid Using __proto__

//  1 Performance:
// Accessing or modifying __proto__ can be slower and less optimized compared to using Object.
// setPrototypeOf or Object.getPrototypeOf.

// 2 Standardization:

// __proto__ is not part of the ECMAScript standard and its use is deprecated. Modern code should use the standard methods for interacting with prototypes.
// Clarity 


// 3 Maintainability:

// Using __proto__ can make code harder to understand and maintain. Standard methods like Object.setPrototypeOf provide clearer intent.
// Preferred Alternatives
// Object.getPrototypeOf: To get the prototype of an object.

 obj = {};
const proto = Object.getPrototypeOf(obj);
// Object.setPrototypeOf: To set the prototype of an object.

 animal = {
  speak() {
    console.log('Animal speaks');
  }
};

const dog = {
  bark() {
    console.log('Dog barks');
  }
};

Object.setPrototypeOf(dog, animal);
dog.speak(); // Animal speaks