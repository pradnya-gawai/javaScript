//  In JavaScript, a prototype is an object from which other objects inherit 
// properties and methods. Every JavaScript object has an internal property called [[Prototype]] 
// (commonly accessed via __proto__), which refers to the prototype object it inherits from.

// In JavaScript, a prototype is a mechanism by which objects inherit properties
// and methods from other objects. It serves as a shared source of functionality, 
// enabling an object to use features defined in its prototype through prototype-based inheritance.

// Prototypes enable inheritance.	
// Inheritance happens because of prototypes and the prototype chain.

// 1. Prototype as a Shared Resource
let animal={
    eats:true
}
let rabiit ={
    jumps:true
}

rabiit.__proto__=animal
console.log(rabiit.eats) // inherited from animal
console.log(rabiit.jumps) // own proprty


// 2. Prototype Chain
// First, it checks the object itself.
// If the property isn't found, it looks at the object’s prototype.
// This chain continues until the property is found or the chain ends (with null).
let longEar={
    earLength:10
}
longEar.__proto__=rabiit
console.log(longEar.eats) // inherited from animaal
console.log(animal.earLength) // undefined 
console.log(longEar.earLength) // own Proprty

// 3. Prototypes in Constructor Functions
// This defines a constructor function named Animal.
function Animal (name) {
    this.name=name
}
// adding a method called walk to the prototype of the Animal constructor function
Animal.prototype.walk=function (){
    console.log(`${this.name} walks`)
}
let cat =new Animal('Cat')
cat.walk() //  Cat walks
let dog =new Animal('Dog')
dog.walk() // dog walks
 

// 3 Object.create()
// Object.create() is a method that creates a new object with a specified prototype.
// It allows you to manually set the prototype of an object,
//  providing more control over inheritance compared to using constructor functions.

let  Greet ={
    msg:"Hellow",
    bye:(()=>{
        console.log("Bye")
    })
}
let pradnya =Object.create(Greet)
console.log(pradnya.msg) //  Hellow
pradnya.bye() // bye

// 5. The prototype Property
// Every JavaScript function (except arrow functions) has a prototype property. 
// This property is an object that is shared by all instances created by that function.
function Person (name){
    this.name =name
}
Person.prototype.greet=function(){
    return ` Welcome ${this.name}`
}
let rani= new Person("Rani")
console.log(rani.greet())
let lila =new Person("Lila")
console.log(lila.greet())


// 6. Overriding Prototype Properties
// In this case:
// lion initially uses the eats method from the prototype.
// But when we define lion.eats directly on the object, it overrides the prototype method.
function  Animal2 (name){
    this.name=name
}
Animal2.prototype.eats=function(){
    return `${this.name}  eats food`
}
let lion =new Animal2 ("Lion")
console.log(lion.eats()) //  Lion  eats food
lion.eats =function(){
    return `${this.name}  eats meat`
}
console.log(lion.eats()) // Lion  eats meat

// 7. __proto__ vs prototype
// __proto__: This is the actual prototype reference of an object.
//  It refers to the prototype from which the object is inheriting.
// prototype: This is a property of constructor functions.
//  It's an object that will become the __proto__ of all instances created by that constructor.
function Month(name){
    this.name=name
}
let may =new Month("May")
console.log(may.__proto__) // {}
console.log(Month.prototype)
console.log(may.__proto__===Month.prototype)

