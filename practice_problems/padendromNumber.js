// JavaScript function that checks if a given number is a palindrome (reads the same backward as forward):
const palendromNumber = (num) => {
  // Convert the number to a string
  let String = num.toString()
  // convert the string into array , then reverse the array then join the string
  let splitTheString = String.split('').reverse().join('')
  // compaor the original strinf with revrsed string
  if (String === splitTheString) {
    return 'Palidrom Number'
  } else {
    return 'Not Palidrom Number'
  }
}
console.log(palendromNumber(45432132))

// byleft and right

const isPalendrom = (number) => {
  // Convert the number to a string
  let str = number.toString()
  // Convert the number to a string
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return 'Not a Palendrom'
    }
    left++
    right--
  }
  return 'Palendrom Number'
}
console.log(isPalendrom(9009))
