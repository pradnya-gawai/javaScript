// Problem 1: Basic Inheritance
// Create a Person class with properties name and age. 
// Then create a Student class that inherits from Person 
// and adds an additional property studentID. Implement methods in both classes to display their details.

//  define the fPerson Construtor 
function Person(name, age) {
    this.name = name
    this.age = age
}

// Define the displayDetails method for Person
Person.prototype.displayDetails = function () {
    console.log(`${this.name} ${this.age}`)
}

// Define the Sudent Constructor 
function Student(name, age, studentID) {
    // Call the Person constructor
    Person.call(this, name, age)
    this.studentID = studentID

}
// // Set up inheritance
Student.prototype = Object.create(Student.prototype)
Student.prototype.contructor = Student

// // Define the displayDetails method for Student
Student.prototype.displayDetails = function () {
    // Call the Person displayDetails method
    Person.prototype.displayDetails.call(this);
    console.log(`Student ID: ${this.studentID}`);
}
// Create instances and display their details
const person = new Person('Pradnya', 30);
person.displayDetails(); // Output: Name: Pradnya, Age: 30
const student = new Student('Lila', 20, 'S12345');
student.displayDetails(); // Output: Name: Lila, Age: 20
//         Student ID: S12345

// with Modern EX6 syntax
class Person1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // Method to display details of Person
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Student1 extends Person1 {
    constructor(name, age, studentID){
        super(name,age)
        this.studentID=studentID
    }
    // Method to display details of Student
    displayDetails(){
        super.displayDetails()
        console.log(`Student ID: ${this.studentID}`);

    }
}
const p1 = new Person1('Chetan', 40); // Name: Chetan, Age: 40
p1.displayDetails()
const s1 =new Student1("Pradnya",26,"ABC123")
s1.displayDetails()  // output  Name: Pradnya, Age: 26 Student ID: ABC123

// Problem 2: Method Overriding
// Create a Vehicle class with a method describe() that returns a string like "This is a vehicle". 
// Then create a Car class that inherits from Vehicle
//  and overrides the describe() method to return "This is a car". Test the method in both classes.

class Vehicle {
    describe(){
        console.log("This is a vehicle")
    }
}
class Car extends Vehicle{
    describe(){
        console.log('This is a car')
    }
}
let v1 =new Vehicle
v1.describe() // This is vehicle

// Problem 3: Prototype Chain
// Create a base class Animal with a method speak().
//  Create a derived class Dog that inherits from Animal and overrides speak() to return "Woof!".
//   Create another derived class Cat that also inherits from Animal and overrides speak() to return "Meow!". 
//   Test the speak() method for each class
class Animal{
    speak(){
        console.log("Sounds")
    }
}
class Dog extends Animal{
    speak(){
        console.log("bark")
    }
}
class Cat extends Animal{
    speak(){
        console.log("mew")
    }
}
let d1 = new Dog() //bark
d1.speak()
let c1=new Cat() // mew
c1.speak()


// Problem 4: Inheritance with Super Constructor
// Create a Shape class with a constructor that takes a color parameter and a method getColor() 
// that returns the color. Create a Circle class that inherits from Shape and adds a property radius.
//  Implement a method getArea() in the Circle class that calculates and returns the area of the circle. 
//  Test both getColor() and getArea() methods.

class Shape {
    constructor(name){
        this.name=name
    }
    getColor(){
        console.log(`Color :${this.name}`)
    }
}
class Circle extends Shape {
    constructor(name,radius){
        super(name)
        this.radius=radius

    }
    getArea(){
        console.log(` Area :${Math.PI * this.radius * this.radius}`) 
    }
}
c1 = new Circle("RED",3.14)
c1.getColor() // Color :RED
c1.getArea()  // Area :30.974846927333928


// Problem 5: Static Methods and Properties
// Create a Counter class with a static property count and a static method increment() 
// that increases the count by one. Create an instance of Counter and test the static method 
// to ensure the count is updated correctly.

class Counter {
    static  count
    static increment(){
        this.count+=1
    }
    static test(){
        console.log(this.count)
    }
}
Counter.count=5
Counter.increment()
Counter.test()


