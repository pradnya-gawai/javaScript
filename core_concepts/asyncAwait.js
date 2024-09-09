// Async and await in JavaScript are modern ways to handle asynchronous operations, making your code easier to write and understand, especially when working with promises.

//
// The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a promise is resolved.

// how it works:
// async: Declares that the function contains asynchronous code.
// await: Pauses the execution of the async function until the promise is resolved or rejected. It's used only inside async functions.

// Basic example of async await
const newFunction = async () => {
  let promise = new Promise((reslove, reject) =>
    setTimeout(() => {
      reslove('Done')
    }, 4000)
  )
  let result = await promise
  console.log(result)
}
newFunction()

// Error Handling with Try/Catch
// When using async/await, you can use try...catch blocks to handle errors more naturally, rather than using .then() and .catch() like with promises.

const tryAndCatch = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
tryAndCatch()

// Multiple await Statements
// If you need to wait for multiple asynchronous operations in sequence, you can use multiple await statements. Each operation will pause the function until the previous one completes.

async function fetchUserData(userId) {
  try {
    // Fetch basic user info
    const userResponse = await fetch(`https://api.example.com/users/${userId}`)
    const userData = await userResponse.json()
    console.log('User Data:', userData)

    // Fetch user's posts based on their userId
    const postsResponse = await fetch(
      `https://api.example.com/users/${userId}/posts`
    )
    const postsData = await postsResponse.json()
    console.log('User Posts:', postsData)

    // Fetch comments for the first post
    if (postsData.length > 0) {
      const commentsResponse = await fetch(
        `https://api.example.com/posts/${postsData[0].id}/comments`
      )
      const commentsData = await commentsResponse.json()
      console.log('Comments on First Post:', commentsData)
    } else {
      console.log('No posts found for this user.')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchUserData(1)

//  Async Functions Return Promises
// Any function declared with async will automatically return a promise. This means you can treat any async function like a promise.

const asyncPromiseThen = async () => {
  let user = await fetch('https://api.example.com/users')
  let data = user.json()
  return data
}
asyncPromiseThen()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
