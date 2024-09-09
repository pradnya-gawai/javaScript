// What is the Event Loop?
// In JavaScript, the event loop is a mechanism that allows asynchronous operations to be performed. It helps manage the execution of code by handling tasks like I/O operations, timers, and user interactions without blocking the main thread.

// Key Concepts
// Single-Threaded Execution: JavaScript runs in a single thread, meaning it can execute only one piece of code at a time. However, it uses the event loop to manage multiple operations efficiently.

// Call Stack: The call stack is a data structure that keeps track of the function calls. When a function is called, it gets pushed onto the stack. When the function finishes executing, it’s popped off the stack.

// Event Queue: The event queue (or task queue) holds asynchronous tasks (e.g., callbacks from setTimeout, fetch, etc.) that are waiting to be executed. When the call stack is empty, the event loop takes tasks from the event queue and pushes them onto the call stack.

// Microtasks and Macrotasks:
// Microtasks: Includes tasks like promises and process.nextTick (in Node.js). They have higher priority and are executed after the current stack is clear and before the next macrotask.
// Macrotasks: Includes tasks like setTimeout, setInterval, and I/O operations. These are handled after microtasks.
// How the Event Loop Works
// Execution of Synchronous Code: JavaScript first executes all the synchronous code on the call stack. This is code that does not involve asynchronous operations and is executed immediately.

// Handling Asynchronous Code:

// When an asynchronous operation (like a timer or network request) is initiated, it’s handed off to the browser or Node.js environment.
// Once the operation completes, its callback is added to the event queue.
// Processing the Event Queue:

// The event loop continuously checks if the call stack is empty.
// If the stack is empty, the event loop takes the first callback from the event queue and pushes it onto the call stack for execution.
// This continues until the event queue is empty or the call stack has tasks.

t // Example: Understanding with Code
// Let’s look at an example to illustrate how the event loop works:

console.log('Start')

setTimeout(() => {
  console.log('Timeout') // Macrotask
}, 0)

Promise.resolve().then(() => {
  console.log('Promise') // Microtask
})

console.log('End')

// Execution Steps:

// Synchronous Code:

// console.log('Start') is executed and logged immediately.
// setTimeout() is called, scheduling a task to be executed after 0 milliseconds (macrotask).
// Promise.resolve().then(...) schedules a microtask to be executed after the current stack is clear.
// console.log('End') is executed and logged immediately.
// Microtask Execution:

// After the synchronous code is done, the event loop checks for microtasks.
// The microtask (Promise.resolve().then(...)) is executed, logging 'Promise'.
// Macrotask Execution:

// The event loop then processes the macrotask (the callback from setTimeout), logging 'Timeout'.

// Output:

// Start
// End
// Promise
// Timeout

// Summary
// Call Stack: Executes synchronous code.
// Event Queue: Holds callbacks from asynchronous operations.
// Event Loop: Moves tasks from the event queue to the call stack when it’s empty, managing asynchronous operations.

// In JavaScript, promises (microtasks) have higher priority than timeouts (macrotasks). This means that when the event loop processes tasks, it will always handle microtasks before moving on to macrotasks.

// Priority Explained
// Microtasks: These include tasks such as promise callbacks (e.g., Promise.then), process.nextTick in Node.js, and MutationObserver callbacks. Microtasks are processed immediately after the currently executing script and before any I/O tasks or other macrotasks.

// Macrotasks: These include tasks such as setTimeout, setInterval, and I/O operations. Macrotasks are processed after all the microtasks have been executed.
