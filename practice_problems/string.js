// Write a function that takes a string as input and returns the string reversed.
// Example: "hello" → "olleh"

const reverseString = (str) => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('')
  }
  return 'Not a String'
}
let result = reverseString('pradnya')
console.log(result)

// Implement a function that checks if a given string is a palindrome (reads the same backward as forward).
const isPalindrme = (str) => {
  let cleanString = str.toLowerCase().replace(/[^a-z)-9]/g, '')
  return reverseString(str) === cleanString
}
console.log(isPalindrme('foof'))

//  Write a function that returns the first non-repeating character in a string. I fall characters are repeating, return null. Example: "swiss" → "w"
let firstNonRepeatingCharacter = (str) => {
  let splitString = str.split('')
  return splitString.find(
    (char) => str.indexOf(char) === str.lastIndexOf(char) || 'not found'
  )
}
console.log(firstNonRepeatingCharacter('wewewo'))

//4. Character Frequency Counter
// Create a function that takes a string and returns an object where the keys are the characters and the values are the frequency of those characters in the string.
// Example: "hello" → { h: 1, e: 1, l: 2, o: 1 }
const charCounter = (str) => {
  let strArray = str.split('')
  return strArray.reduce((acc, val) => {
    console.log(acc[val], acc, val)
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
}
console.log(charCounter('PPOOOPLKOKK'))

// To check if two strings are anagrams of each other, you can follow these steps:

// Normalize the Strings: Convert both strings to lowercase and remove any non-alphanumeric characters if necessary.
// Sort the Characters: Sort the characters in each string.
// Compare the Sorted Strings: If the sorted versions of both strings are the same, then the strings are anagrams.

const anagrams = (str1, str2) => {
  lerCleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, ' ')
  lerCleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, ' ')
  if (
    lerCleanStr1.split('').sort().join('') ===
    lerCleanStr2.split('').sort().join('')
  ) {
    console.log('Anagram String')
  } else {
    console.log('Not an Anagram')
  }
}
anagrams('love', 'dove')

// To implement a string compression function, you'll need to follow these steps:

// Iterate Through the String: Traverse the string and count the occurrences of each character.
// Build the Compressed String: For each character sequence, append the character and its count to a new string.
// Compare Lengths: If the length of the compressed string is not smaller than the original string, return the original string.

let compressedString = ''
let count = 1
const stringCompression = (str) => {
  for (let i = 0; i < str.length; i++)
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++
    } else {
      compressedString += str[i] + count
      count = 1
    }
  return compressed.length < str.length ? compressed : str
}
