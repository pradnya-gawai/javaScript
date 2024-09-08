// 1 What is Asynchronous JavaScript ?

/* JavaScript is generally single-threaded, meaning it executes one operation at a time. But, many operations (like fetching data from a server) can take time. If JavaScript had to wait for these operations to complete, it would block other tasks from running, making the web page unresponsive. This is where asynchronous behavior comes into play.

Asynchronous programming allows JavaScript to start long-running operations (like network requests) and continue executing other code while waiting for those operations to finish. */

// #################################################################
// 2. Synchronous vs. Asynchronous
// $$ Synchronous (Blocking): Tasks are executed one after the other. Each task waits for the previous one to finish.
console.log('Task 1')
console.log('Task 2')
console.log('Task 3')

// Output Task 1 Task 2 Task 3
// $$ Asynchronous (Non-blocking): Long-running tasks can start, and JavaScript can continue to execute other tasks without waiting for the long-running task to finish.
console.log('Task 1')
setInterval(() => console.log('Task 2'), 3000)
console.log('Task 3')
// Output Task 1 Task 3 Task 2

// 3. Callbacks
// The most basic way of handling asynchronous tasks is using callbacks.
// A callback is simply a function passed into another function, which is called when an asynchronous task is complete.

// 4. Promises
// To solve the problems with callbacks, Promises were introduced in ES6 (ES2015). A Promise represents a value that may be available now, in the future, or never. It helps avoid callback hell by flattening the code structure.

// A promise has three states:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
