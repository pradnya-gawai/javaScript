/* An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because:

153= 1^3+5^3+3^3  =1+125+27=153  */

const checkArmstrong = (number) => {
  // conver number into string
  str = number.toString()
  let power = str.length
  let sum = 0
  for (let i = 0; i < power; i++) {
    sum += Math.pow(parseInt(str[i]), power)
  }
  if (sum === number) {
    return 'Armstrong Number'
  }
  return 'Not a Armstrong Number'
}
console.log(checkArmstrong(150))
