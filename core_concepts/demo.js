// console.log(1 < 2 < 3)
// console.log(3 > 2 > 1)
// console.log('hello')
// var a = 5
// console.log(a++) // 6
// console.log(a) //5
// let array = ['raju', 0, 'ramesh', null, 'kiran', false]
// let removedFalsey = []
// array.forEach((element) => {
//   if (typeof element !== typeof String) removedFalsey.push(element)
// })
// console.log(removedFalsey)
// const TodayDate = () => {
//   let date = new Date()
//   console.log(date, 'date')
//   let day = date.getDay()
//   let month = date.getMonth()
//   let year = date.getFullYear()
//   console.log(`${day}-${month + 1}-${year}`)
// }
// TodayDate()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 5, 44, 50]

// const secondLastElement = (arr) => {
//   return arr.at(-2)
// }

// const result = secondLastElement(arr)
// console.log(result)

let users = [
  {
    name: 'Raju',
    skills: ['c', 'java', 'js', 'react'],
  },

  {
    name: 'Mahesh',
    skills: ['c', 'java', 'js'],
  },

  {
    name: 'Hemanth',
    skills: ['c', 'java', 'react'],
  },
]
const newUsers = users.map((item, index) => {
  return {
    id: index + 1,
    name: item.name,
    skills: item.skills,
  }
})
console.log(newUsers)
