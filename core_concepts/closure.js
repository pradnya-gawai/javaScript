/*
A closure is a
1 function that has access to its own scope,
2 the scope of the outer function,
3 and the global scope.
It retains access to these variables even after the outer function has finished executing.



What is a closure in JavaScript?
Answer: A closure is a feature in JavaScript where a function retains access to its lexical scope (the scope in which it was defined) even after that function has been executed. In other words, a closure allows a function to access variables from an outer function after the outer function has finished executing.



2. How does a closure work in JavaScript?
Answer: When a function is defined inside another function, the inner function has access to the outer function's variables. Even after the outer function has finished executing, the inner function retains access to those variables due to the closure. This is possible because the inner function maintains a reference to the scope in which it was created.






*/
let globalVarible = 10
function outerFunction() {
  const outerVariable = 'I am outside!'
  console.log('outerFunction: outerVariable is set to:', outerVariable)

  function innerFunction() {
    console.log(
      'innerFunction: outerVariable is accessible here:',
      outerVariable
    )
    console.log(
      'innerFunction: I can access outerVariable even though I am defined inside innerFunction.'
    )
  }

  console.log('outerFunction: returning innerFunction')
  return innerFunction
}

const closure = outerFunction()
console.log(closure, 'closure') //  Output :[Function: innerFunction] closure
console.log('closure is now holding the returned innerFunction')
closure() // Execute the closure

// Output :
// outerFunction: outerVariable is set to: I am outside!
// outerFunction: returning innerFunction
// closure is now holding the returned innerFunction
// innerFunction: outerVariable is accessible here: I am outside!
// innerFunction: I can access outerVariable even though I am defined inside innerFunction.

/*
In the above example, the closure function is innerFunction.
Here's why:
innerFunction is defined inside outerFunction.

When outerFunction is called, it creates innerFunction and returns it.

Even after outerFunction has finished executing, the returned innerFunction still has access to the variable outerVariable from outerFunction.

This makes innerFunction a closure because it "closes over" and remembers the environment where it was created, specifically the variable outerVariable.

When you store the returned function in closure and later call closure(), you are calling the closure function (innerFunction). */
//#########################################################################

// Use case
function createCounter() {
  let count = 0 // Private variable
  console.log('createCounter: Initial count is', count)

  return {
    increment() {
      count += 1
      console.log('increment: count is now', count)
      console.log(globalVarible, 'globalVarible')
      return count
    },
    getCount() {
      console.log('getCount: Current count is', count)
      return count
    },
  }
}

const counter = createCounter()
console.log('counter created.')
console.log(counter, 'counter') //{ increment: [Function: increment], getCount: [Function: getCount] } counter
console.log('Calling counter.increment()')
console.log('Result of counter.increment():', counter.increment()) // Output: 1

console.log('Calling counter.getCount()')
console.log('Result of counter.getCount():', counter.getCount()) // Output: 1

/* 1 Data Encapsulation (Private Variables)
Closures allow you to create private variables that are not accessible from the outside. This means you can protect data from being modified directly and provide controlled access through specific methods.

1. Function Definition:
function createCounter() {
let count = 0; // Private variable
createCounter is a function that initializes a local variable called count and sets it to 0.
let count = 0; declares a variable count which is only accessible within the createCounter function. This variable is private to the createCounter function and cannot be accessed directly from outside it.

2. Returning an Object with Methods:
    return {
        increment() {
            count += 1;
            return count;
        },
        getCount() {
            return count;
        }
    };
}
The createCounter function returns an object with two methods: increment and getCount.
increment: This method increases the value of count by 1 and then returns the new value of count.
getCount: This method simply returns the current value of count.

3. Creating an Instance of the Counter:
const counter = createCounter();
When you call createCounter(), it creates a new instance of the counter.
counter is now an object that has the increment and getCount methods from the object returned by createCounter.
Although count is private and not directly accessible, the increment and getCount methods can still access it due to the closure.

4. Using the Methods:
console.log(counter.increment()); // Output: 1
console.log(counter.getCount());  // Output: 1
counter.increment():
This calls the increment method on the counter object.
Inside the increment method, count is incremented by 1.
The method returns the new value of count, which is 1.
So, the output of console.log(counter.increment()) is 1.
counter.getCount():
This calls the getCount method on the counter object.
The method returns the current value of count, which is 1 (since it was incremented in the previous step).
So, the output of console.log(counter.getCount()) is 1.
Detailed Explanation of the Closure:

Scope Creation:
When createCounter is executed, a new scope is created. This scope includes the variable count and the methods increment and getCount.

Access to Variables:
The methods increment and getCount form a closure around the count variable. This means they "remember" the environment in which they were created, specifically the count variable.

Persistent State:
The count variable persists between calls to increment and getCount because these methods are closures that retain access to the count variable.

Encapsulation:
The count variable is not accessible directly from outside the createCounter function. The only way to interact with it is through the increment and getCount methods, which control how count is modified and accessed.

Summary:
createCounter sets up a private count variable and returns methods to interact with it.
The returned object methods (increment and getCount) form closures that retain access to the private count variable.
This setup allows you to manage and encapsulate state effectively, ensuring that the count variable is protected from direct access and modification
*/

//#########################################################################
/*2. Function Factories
Closures allow you to create functions with preset arguments, also known as function factories. This is useful for creating customized functions on the fly.
Function factories are a powerful concept in JavaScript where you create a function that generates other functions. These generated functions are customized based on the arguments passed to the factory function. The term "function factory" comes from the idea that the main function produces or "manufactures" other functions.

How Function Factories Work:

Factory Function: A function that generates and returns another function.

Preset Arguments: The factory function typically takes one or more arguments, which are then used by the inner function. These arguments are "preset" or fixed for the functions that the factory produces.

Closures: The returned function has access to the arguments passed to the factory function, even after the factory function has finished executing, thanks to closures.

 */
function makeMultiplier(multiplier) {
  console.log(multiplier, 'multiplier')
  return function (number) {
    console.log(number, 'number')
    return number * multiplier
  }
}
const double = makeMultiplier(2)
console.log(double, 'double') // Output :[Function (anonymous)] double
const triple = makeMultiplier(3) // Output :[Function (anonymous)] triple
console.log(triple, 'triple')
console.log(double(5)) // Output: 10
console.log(triple(5)) // Output: 15

// ################################################################################################################
/* 3 Maintaining State / Memoization
Closures help maintain state between function calls. This is particularly useful in scenarios like counters or toggles. */
function createToggle(initialState) {
  let isOn = initialState
  return function () {
    isOn = !isOn
    return isOn
  }
}
const toggle = createToggle(true) // Initial state is true
console.log(toggle, 'toggle') //[Function (anonymous)] toggle
console.log(toggle()) // false
console.log(toggle()) // true
console.log(toggle()) // false
console.log(toggle()) // true
