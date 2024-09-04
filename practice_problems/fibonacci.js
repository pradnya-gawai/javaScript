// fibonacci seriers

const fibonacciSeries = (n) => {
  let fibboSeris = [0, 1]

  // Generate Fibonacci series up to n terms
  for (let i = 2; i < n; i++) {
    fibboSeris[i] = fibboSeris[i - 1] + fibboSeris[i - 2]
  }
  return fibboSeris
}
console.log(fibonacciSeries(9))

function fibonacciWithRecursive(n) {
  // Base cases: return n if n is 0 or 1
  if (n === 0 || n === 1) {
    return n
  }
  // Recursive case: sum of the previous two Fibonacci numbers
  return fibonacciWithRecursive(n - 1) + fibonacciWithRecursive(n - 2)
}

// Example usage
const numberOfTerms = 10
for (let i = 0; i < numberOfTerms; i++) {
  console.log(fibonacciWithRecursive(i))
}
console.log(fibonacciWithRecursive(9))
