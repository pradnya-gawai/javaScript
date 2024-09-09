// 1 Create an async function that fetches data from a public API (e.g., a joke or weather API) and logs the result.
// Modify the function to fetch two random jokes and display them one after the other.
// Add error handling to log any fetch failures
//1st solution
const fetchJoke = async () => {
  try {
    let response = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    )
    let result = await response.json()
    console.log(result)
    let response1 = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    )
    let result1 = await response1.json()
    console.log(result1)
  } catch (error) {
    console.log(error)
  }
}
// fetchJoke()

// 2nd solution
const fetchJokes = async () => {
  try {
    joke1Promise = fetch('https://official-joke-api.appspot.com/random_joke')
    joke2Promise = fetch('https://official-joke-api.appspot.com/random_joke')
    const [response1, response2] = await Promise.all([
      joke1Promise,
      joke2Promise,
    ])
    const joke1 = await response1.json()
    const joke2 = await response2.json()
    console.log(joke1)
    console.log(joke2)
  } catch (error) {
    console.log(error)
  }
}
// fetchJokes()

// 2. Chaining Async Calls: Fetch Multiple APIs
// Simulate a situation where you need to fetch data from two APIs sequentially.
// Fetch a list of posts for a user, then fetch comments for the first post.
// Use Promise.all to fetch multiple users simultaneously.

const fetchPost = async (userId) => {
  try {
    const fetchPostData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    )
    const postData = await fetchPostData.json()
    console.log(postData instanceof Array)
    if (postData.length > 0) {
      let firstPostId = postData[0].id
      const commentResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${firstPostId}/comments`
      )
      comments = await commentResponse.json()
      console.log(comments)
    }

    // console.log(postData, 'postData')
  } catch (error) {
    console.log(error)
  }
}
fetchPost(5)

// // Fetch posts for multiple users simultaneously using Promise.all
const fetchMultipleUser = async (userIds) => {
  try {
    const userData = userIds.map((userId) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(
        (response) => response.json()
      )
    })
    const allPosts = await Promise.all(userData)
    console.log(allPosts)
  } catch (error) {
    console.log(error)
  }
}
