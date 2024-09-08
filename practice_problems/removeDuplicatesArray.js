let array = [1, 2, 2, 3, 4, 4, 5]

let removeDuplicates = () => {
  let temp = []
  for (let i = 0; i < array.length; i++) {
    // indexOf methode returns -1 if element not found
    if (temp.indexOf(array[i]) === -1) {
      temp.push(array[i])
    }
  }
  return temp
}
console.log(removeDuplicates())

// #######################################################################

const removeDuplicatesByFilter = (array) => {
  return array.filter((item, index) => {
    console.log(
      'Current Item:',
      item,
      'Current Index:',
      index,
      'First Index of Item:',
      array.indexOf(item)
    )

    // indexOf function return the 1st occurance of given item in array
    return array.indexOf(item) === index
  })
}

console.log(removeDuplicatesByFilter(array))
