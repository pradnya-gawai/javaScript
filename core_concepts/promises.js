/*

 A more modern approach to handling asynchronous operations is using Promisesor async/await. Promises offer a cleaner and more manageable way to handle multiple asynchronous operations without deeply nested callbacks.

In general programming, a Promise is a concept that represents a placeholder for a value that may not be available yet but will be resolved at some point in the future. It's a way to handle asynchronous operations without blocking the program's execution.
Key Characteristics of a Promise:

Pending State: Initially, the promise is in a pending state, meaning the operation hasn't completed yet.

Fulfilled State: If the asynchronous operation is successful, the promise is fulfilled with a resolved value.

Rejected State: If the operation fails, the promise is rejected with an error or failure reason.

Basic Promise Lifecycle:
Pending: The promise is waiting for the asynchronous task to complete.

Resolved (Fulfilled): The task is completed successfully, and the promise is resolved with a value.

Rejected: The task failed, and the promise is rejected with a reason (error).

Analogy:
Think of a promise like an "IOU" from a friend. When they give you the IOU, you don't have the money yet, but they promise to pay you later. Once they pay you, the promise is fulfilled. If they can't pay for some reason, the promise is rejected.

Example in Real Life:
Let's say you order food online:
The order is placed (the promise is pending).
If the delivery is successful, the food arrives (the promise is fulfilled).
If there's a problem and the food can't be delivered, you'll be informed of the failure (the promise is rejected).
Importance in Programming:
Promises provide a clean way to manage asynchronous operations, making it easier to avoid "callback hell" (deeply nested callback functions) and handle asynchronous tasks like network requests, file reading, or timers in a more structured manner.

In programming, Promises abstract away the complexities of asynchronous tasks, helping to keep code more readable and manageable when dealing with uncertain timing of events. */

// Promise is bulit in Javascript object
// You can use Object.getOwnPropertyNames() to list all the own properties (including methods) of the Promise object:

//To get the prototype methods of promises (instance methods), you can do:
// const prototypeMethods = Object.getOwnPropertyNames(
//   Object.getPrototypeOf(new Promise(() => {}))
// )
// console.log(prototypeMethods)

// Prototype Methods: These are available on the prototype of Promise and are used with promise instances.They deal with individual promise objects.

// Static Methods: These are available on the Promise constructor itself and are used for creating promises or handling multiple promises. They do not require a promise instance to be used.

// Common Static Methods:
// Promise.all(iterable): Returns a single promise that resolves when all of the promises in the iterable have resolved.
// Promise.allSettled(iterable): Returns a promise that resolves after all of the given promises have either resolved or rejected.
// Promise.any(iterable): Returns a promise that resolves as soon as one of the promises in the iterable fulfills.
// Promise.resolve(value): Returns a promise that is resolved with the given value.
// Promise.reject(reason): Returns a promise that is rejected with the given reason.

// Common Prototype Methods:
// .then(onFulfilled, onRejected): Adds fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called callback.
// .catch(onRejected): Adds a rejection handler callback to the promise and returns a new promise resolving to the return value of the callback if it was called, or to its original fulfilled value if the promise was not rejected.
// .finally(onFinally): Adds a handler to be called when the promise is settled, regardless of its outcome

// Creating promises in JavaScript is done using the Promise constructor. Let’s go step by step on how to create and handle promises.

function getPosts() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Check if the response is OK (status code 200-299)
        if (response.ok) {
          return response.json() // Parse the JSON data
        } else {
          reject('Failed to fetch posts. Status Code: ' + response.status)
        }
      })
      .then((data) => {
        resolve(data) // Resolve the promise with the fetched data
      })
      .catch((error) => {
        reject('Network error: ' + error.message) // Handle network or other errors
      })
  })
}

// Call the function and handle the promise
getPosts()
  .then((posts) => {
    console.log('Fetched Posts:', posts) // Logs the fetched posts data
  })
  .catch((error) => {
    console.log('Error:', error) // Logs the error if something goes wrong
  })
