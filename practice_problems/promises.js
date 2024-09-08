// 1 Creating a Simple Promise:
// Write a function that returns a promise which resolves after 3 seconds with the value "Hello, World!".
// Add a .then() method to log the resolved value to the console.

const helloWorld = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, World!')
    }, 3000)
  })

// helloWorld().then((data) => {
//   console.log(data)
// })

// 2 Rejecting a Promise:
// Create a promise that simulates a coin toss. If the toss is heads, resolve the promise with "Heads", and if tails, reject it with "Tails".
// Use .then() to log the result when the promise is resolved and .catch() to handle rejection.

const tossCoin = () =>
  new Promise((resolve, reject) => {
    const toss = Math.random() < 0.5 // Simulates a 50/50 coin toss
    if (toss) {
      resolve('Heads')
    } else {
      reject('Tails')
    }
  })
// tossCoin()
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((data) => {
//     console.log(data)
//   })

// 3 Promise with setTimeout:
// Write a function that returns a promise which resolves after a given number of milliseconds. Use setTimeout to delay the resolution.
// Chain a .then() to print a message after the delay

const messagePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pradnya Please follow the promise')
    }, 3000)
  })
// messagePromise().then((data) => {
//   console.log(data)
// })

// 4 Fetching Data with Promises:
// Use the fetch() API to get data from https://jsonplaceholder.typicode.com/users.
// Chain .then() methods to parse and log the data or an error message if the fetch fails.

const fetchData = () =>
  new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response) {
          return response.json()
        } else {
          throw new Error(' Network response was not ok')
        }
      })
      .then((data) => {
        resolve(data)
      })
      .catch((data) => {
        reject(data)
      })
  })

// fetchData()
//   .then((data) => {
//     console.log(data) // Log the data if the promise resolves
//   })
//   .catch((error) => {
//     console.error('Error:', error) // Log the error if the promise is rejected
//   })

// Intermediate Promise Questions:
//  5 Chaining Promises:
// Write two separate functions: one that returns a promise resolving to "First", and another that returns a promise resolving to "Second".
// Chain them so that "Second" only resolves after "First", and log both values in order.
const First = () =>
  new Promise((resolve, reject) => {
    resolve('First Promise')
  })
const Second = () =>
  new Promise((resolve, reject) => {
    resolve('Second Promise')
  })
// First()
//   .then((data) => {
//     console.log(data) // Logs "First Promise"
//     return Second() // Return the Second promise to chain it
//   })
//   .then((data) => {
//     console.log(data) // Logs "Second Promise"
//   })

// 6 Error Handling in Promise Chains:
// Create a promise that resolves with the value 10. Chain .then() methods to first double the value, then subtract 5, then throw an error if the value is greater than 15. Handle the error using .catch().

const startPromise = new Promise((resolve) => {
  resolve(50) // Initial value is 10
})

// startPromise
//   .then((value) => {
//     const doubled = value * 2
//     console.log(`Doubled Value: ${doubled}`) // Logs 20
//     return doubled
//   })
//   .then((value) => {
//     const subtracted = value - 5
//     console.log(`After Subtracting 5: ${subtracted}`) // Logs 15
//     return subtracted
//   })
//   .then((value) => {
//     if (value > 15) {
//       throw new Error('Value is greater than 15') // Throws an error if value is > 15
//     }
//     console.log(`Final Value: ${value}`) // Will not run because value is 15
//     return value
//   })
//   .catch((error) => {
//     console.error('Error:', error.message) // Handles the error and logs it
//   })

// 7 Multiple Promises:

// Write a function that returns a promise which resolves after a random number of seconds (between 1 and 3). Create 3 such promises and use Promise.all() to wait for all of them to resolve. Log the results once all promises have resolved.
const randomPromise = () => {
  let time = Math.floor(Math.random() * 3 + 1) * 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${time / 1000} seconds`)
    }, time)
  })
}
// Create 3 random promises
const promise1 = randomPromise()
const promise2 = randomPromise()
const promise3 = randomPromise()

// Promise.all([promise1, promise2, promise3]).then((results) => {
//   console.log('All promises resolved:')
//   results
//     .forEach((result, index) => {
//       console.log(`Promise ${index + 1}: ${result}`)
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error)
//     })
// })

// 9  Promise with Promise.race():
// Write three promises that resolve after different delays (e.g., 2, 4, and 6 seconds). Use Promise.race() to log the first resolved value.

const racePromise = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${seconds} seconds`)
    }, seconds * 1000)
  })
}
const prom1 = racePromise(3)
const prom2 = racePromise(4)
const prom3 = racePromise(1)

// Promise.race([prom1, prom2, prom3])
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// 10 Parallel Fetching with Promise.all:

// Fetch data from two different endpoints (e.g., https://jsonplaceholder.typicode.com/users and https://jsonplaceholder.typicode.com/posts) in parallel using Promise.all(). Combine the results and log them.

const fetchUserData = (url) => {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json()
    } else throw new Error('error log')
  })
}
// const request1 = fetchUserData('https://jsonplaceholder.typicode.com/users')
// const request2 = fetchUserData('https://jsonplaceholder.typicode.com/posts')
// Promise.all([request1, request2])
//   .then((results) => {
//     results.forEach((result) => {
//       console.log(result)
//     })
//   })
//   .catch((error) => {
//     // Handle errors if any request fails
//     console.error('Error:', error)
//   })

// 10 Using Promise.allSettled():
// Write three promises: one that resolves, one that rejects, and one that takes 3 seconds to resolve. Use Promise.allSettled() to log the status and results of each promise when they all complete.

const p1 = new Promise((resolve) => resolve('Promise 1 resolved'))
// const p2 = new Promise((_, reject) => reject('Promise 2 rejected'))
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 3 resolved after 3 seconds'), 3000)
)
// Using Promise.allSettled to log the status and results of all promises
// all promises will setteled after3 sec
// Promise.allSettled([p1, p2, p3]).then((results) => {
//   results.forEach((result, index) => {
//     console.log(`Promise ${index + 1}:`, result)
//   })
// })

// 12 Handling Dependent Promises:
// Write a function that fetches a list of users (https://jsonplaceholder.typicode.com/users), then fetches the posts of the first user (https://jsonplaceholder.typicode.com/posts?userId=1). Chain these promises so that the posts are only fetched after the users are successfully retrieved.

const fetchUsersAndPosts = () => {
  // Step 1: Fetch the users
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      return response.json() // Parse and return the JSON data
    })
    .then((users) => {
      // Step 2: Extract the first user
      const firstUserId = users[0].id
      console.log('First User:', users[0])

      // Step 3: Fetch posts for the first user
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`
      )
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      return response.json() // Parse and return the JSON data
    })
    .then((posts) => {
      // Step 4: Log the posts of the first user
      console.log('Posts of the first user:', posts)
    })
    .catch((error) => {
      console.error('Error:', error.message) // Handle any errors
    })
}

// Call the function to fetch users and posts
fetchUsersAndPosts()
