/*
Array.prototype.values()
Returns an iterator object that contains the values of the array.
You can loop over this iterator using for...of or use the next() method to manually iterate through the values
*/
let num = [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num.values())
const iterator = num.values()
for (num of iterator) {
  console.log(num)
}
const days = [
  'Monday',
  'Tuesday',
  'Wensday',
  'Thrusday',
  'Friday',
  'Saturday',
  'Sunday',
]
let day = days.values()
for (day of day) {
  console.log(day)
}
