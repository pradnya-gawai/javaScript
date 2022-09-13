function customer (name,add)
{
    this.name = name
    this.add=add
    customer.prototype['country'] ="India"
}
customer.prototype.age=30
const c1 = new customer("mohan","noida")
console.log(`name ${c1.name} add ${c1.add} age ${c1.age} country ${c1.country}`)

c2=new customer()
console.log(`name ${c2.name} add ${c2.add} age ${c2.age}`)


// willing to acess relationship
console.log(c1.__proto__.age)
console.log(c1.__proto__)

c1.__proto__.age=67 // update every where we
console.log(c1.__proto__.age)
console.log(c2.__proto__.age)

c1.age=23 // update only c1

console.log(c1.age)
console.log(c2.age)
