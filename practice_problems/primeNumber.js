/* A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is a number that can only be divided evenly by 1 and itself without leaving a remainder.

Examples of Prime Numbers:
2 is a prime number because it can only be divided by 1 and 2.
3 is a prime number because it can only be divided by 1 and 3.
5 is a prime number because it can only be divided by 1 and 5.
4 is not a prime number because it can be divided by 1, 2, and 4.

Steps to Check if a Number is Prime:
If the number is less than 2, it's not prime.
For numbers 2 or greater:
Check if the number can be divided evenly by any number other than 1 and itself.
You only need to check divisors up to the square root of the number, as any factor larger than this would have a corresponding factor smaller than the square root.

 Explanation:
Early Return for Numbers Less Than or Equal to 1:

If the number is less than or equal to 1, the function immediately returns false, as these numbers are not prime.
Loop Through Possible Divisors:

The loop starts at 2 and goes up to the square root of the number. This is because if a number is divisible by a number greater than its square root, the corresponding divisor would be smaller and would have already been checked.
Check for Divisibility:

The modulus operator % is used to check if the number can be divided evenly by i. If number % i === 0, then number is not prime, and the function returns false.
Return true if No Divisors Found:

If the loop completes without finding any divisors, the function returns true, indicating that the number is prime.
This approach efficiently checks whether a number is prime by reducing the number of possible divisors it needs to check. */

const isPrime = (number) => {
  if (number <= 1) {
    return 'Not A Prime Nnmber'
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 'Not a Prime Number '
    }
  }
  return 'Prime Number'
}

console.log(isPrime(3))
