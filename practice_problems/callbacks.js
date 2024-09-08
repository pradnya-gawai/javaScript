// 1. Delay Message
// Write a function delayedMessage that takes a message and a delay time (in milliseconds) as arguments. After the delay, it should log the message to the console using a callback function.
const delayedMessage = (message, delay, callback) => {
  console.log(message)
  setTimeout(() => {
    callback(message)
  }, delay)
}
const Message = () => {
  console.log('I am callback function')
}
delayedMessage('Loading...', 2000, Message)

// 2. Math Operations
// Create a function doMath that takes two numbers and a callback function as arguments. The callback function should perform a mathematical operation (addition, multiplication, etc.) on the two numbers.

const mathOprations = (num1, num2, callback) => {
  console.log('Math Opration....')
  setTimeout(() => {
    callback(num1, num2)
  }, 3000)
}

const sum = (num1, num2) => {
  console.log(num1 + num2)
}
mathOprations(10, 20, sum)

// 3 Simulate downloading files by writing a function downloadFile that takes the file name and a callback. The download should take 3 seconds, and after it completes, the callback should log a success message.

const downloadFile = (name, msg, callback) => {
  console.log('Downloading File...')
  setTimeout(() => {
    callback(name, msg)
  }, 3000)
}
const download = (name, msg) => {
  console.log(name + msg)
}
downloadFile('new.pdf  ', 'Download successfully ', download)
