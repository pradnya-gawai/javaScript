// Definition: Scope refers to the accessibility of variables and functions within a JavaScript program. 
// It determines where a variable or function can be accessed or modified.
// Types:

// Global scope: Variables and functions declared outside of any function or block
// have global scope and can be accessed from anywhere in the code.

// Function scope: Variables and functions declared within a function have function scope a
// nd can only be accessed within that function.


// Block scope: Variables declared using let or const within a block 
// (e.g., if statement, for loop, or try-catch block) have block scope and can only 
// be accessed within that block.

var globalScope ="I am Global variable"
const testScope =()=>{
    var functionScope=" I am function varible"
    console.log(functionScope)
    if(5>4){
        let blockScope ="Local Scope Varible"
        console.log(blockScope)
    }
}
console.log(globalScope) // Oupuut : Global Scope
testScope() 
// OutPut :I am function varible
// OutPut :Local Scope Varible
// console.log(functionScope) //  OutPut :ReferenceError: functionScope is not defined


// ## Hoisting

// Definition: Hoisting is a JavaScript mechanism that moves declarations (functions and variables)
//  to the top of their respective scopes (either global or function). 
//  This means that you can use a function or variable before it's declared.
// ### Behavior:

// Function declarations: Entirely hoisted to the top of the scope,
// allowing them to be called before they're defined.


// Variable declarations: Only the declaration is hoisted, 
// leaving the assignment undefined until the actual declaration is reached. 
// This can lead to the undefined value being used before the variable is assigned a value.

console.log(HostedFunction()) // Output Hello Word

function HostedFunction (){
 return " Hello Word"
}
let name 
console.log(name) // Ouput Undefined
name ="pradnya"
console.log(name) // output : pradnya

// Note: Variables declared with let and const are also hoisted, 
// but they are not initialized. Accessing them before their declaration 
// results in a ReferenceError. This period between the start of the block
//  and the declaration is known as the "temporal dead zone."


console.log(myVar); // output : undefined
myVar = 'Hello, World!';
var myVar;
console.log(myVar); // output : Hello, World

 console.log(myLet); //ReferenceError: Cannot access 'myLet' before initialization
let myLet = 'Hello, World!';

 console.log(greet()); //TypeError: greet is not a function

var greet = function() {
  return 'Hello, World!';
};


function testHoisting() {
    console.log(a); // undefined
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    var a = 1; 
    let b = 2; 
  }
  testHoisting();

  