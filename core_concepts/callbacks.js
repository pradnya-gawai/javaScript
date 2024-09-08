// // In JavaScript, callbacks are a fundamental concept for handling asynchronous operations. They allow you to pass one function as an argument to another function and then execute that function once a task is complete.
// // ##############################################################################

// // What is a Callback?
// // $$ A callback is a function that is passed as an argument to another function and is executed after the first function has completed its operation.

// // Why are Callbacks Used?
// // Callbacks are primarily used to:
// //  $$$ Handle asynchronous tasks like fetching data from a server, reading files, or handling events.
// //  $$$ Ensure that code execution continues only after a certain task is completed.

// // ##############################################################################

// // How Callbacks Work: A Step-by-Step Explanation
// // $$$ Function Passing:
// /* In JavaScript, functions are first-class objects, which means you can pass them as arguments to other functions just like any other variable.
//  The receiving function (the one that accepts the callback) can execute this passed-in function whenever it needs to.*/

// // $$$ Execution Flow:
// /*The receiving function performs its task (e.g., a network request).
// Once the task is complete, it calls the callback function, often passing some result (e.g., the fetched data) to it.*/

// // Simple Example of a Synchronous Callback

const Greet = (name, callback) => {
  console.log('Hello  ' + name)
  callback()
}
const sayGoodBye = () => {
  console.log('Goodbye !')
}
Greet('Pradnya', sayGoodBye)

// // Asynchronous Callback Example
const fetchData = (callback) => {
  console.log('Fetching Data ....')
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' } // Simulating some fetched data
    callback(data) // Calling the callback after data is fetched
  }, 3000)
}

const processData = (data) => {
  console.log('Processing Data:', data)
}
// // Calling fetchData and passing processData as the callback
fetchData(processData)

// // Callback Hell

// // While callbacks are powerful, excessive use of them can lead to a problem known as callback hell. This happens when you have many nested asynchronous calls that depend on each other.

setTimeout(() => {
  console.log('Task 1 complete')

  setTimeout(() => {
    console.log('Task 2 complete')

    setTimeout(() => {
      console.log('Task 3 complete')

      setTimeout(() => {
        console.log('Task 4 complete')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
// // While this works, it becomes difficult to read, maintain, and debug as the number of nested callbacks increases.

// // Avoiding Callback Hell
// // 1 Use Named Functions: Instead of nesting anonymous functions, use named functions to improve readability.

function task1() {
  console.log('Task 1 complete')
  setTimeout(task2, 1000)
}

function task2() {
  console.log('Task 2 complete')
  setTimeout(task3, 1000)
}

function task3() {
  console.log('Task 3 complete')
  setTimeout(task4, 1000)
}

function task4() {
  console.log('Task 4 complete')
}

setTimeout(task1, 1000)
