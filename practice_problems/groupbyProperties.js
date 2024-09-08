//  Group Elements by Property
// Question: Write a function that groups elements of an array based on a property (e.g., group objects by a category).
// Example Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }, { type: 'fruit', name: 'banana' }]
// Example Output: { fruit: ['apple', 'banana'], vegetable: ['carrot'] }

let Input = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' },
]
let groupByProperties = (Input) => {
  return Input.reduce((group, value) => {
    // Check if the group for this type exists, if not, initialize it
    if (!group[value.type]) {
      group[value.type] = []
    }
    // Push the 'name' into the corresponding type array
    group[value.type].push(value.name)
    return group
  }, {})
}
let result = groupByProperties(Input)
console.log(result)
