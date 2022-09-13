// function with default value
function Greet(message = "Pradnya") {
  console.log(message);
}
Greet();
Greet("Hello");

// rest parameters
function Details(name, ...details) {
  console.log(name);
  details.forEach((item) => {
    console.log(item);
  });
}
Details("Mohan", "Priya", 930284);

// we can pass array as function parameter by using the spread oprator
numbers = [1, 2, 3];
function sum(...parameters) {
  let result = 0;
  parameters.forEach((item) => {
    result += item;
  });
  console.log(result);
}
sum(...numbers); //spread oprator

const greet =Greet
function greetA(para) {
para("hello function")
}
greetA(greet); //