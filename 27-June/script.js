// console.log('workings');

//ES6 vs ES5
//var / let and const
//Arrow Function in ES6
// Arrow Functions : it has been introduced in ES6 version = 2015
//It is advance or modular way of writing javascript function, it more readable

// Syntax
// () =>{

// }
// ()

// const data = (name, age) => {
//   console.log(`My name is ${name} and age is ${age}`);
// };

// data("John", 30);

// 1. Create a function which take number as a parameter and return true if the number is even else false if it is odd

// 2. Create a function which takes parameter celsius and converts in to fahrenheit and print it on the console.
// function conversion(celsius) {
// BODMAS rule
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   console.log(fahrenheit + " fahrenheit");
// }

// conversion(35);

// 3. Create a function which takes number as parameter and returns the cube of number

// function scope
// var, let and const  - keyword

// function random() {
//   var a = 10;
//   console.log(a);
// }

// console.log(a);

// random();
// --------------------------------------------------------------------------------------------------

// Execution context and call stack
// Everything in javascript happens inside the execution context
// Javascript is single threaded synchronous language..

// Execution Context : Creation phase(Memory allocation) and Execution Phase(code of environment)
// Global Execution Context and Function Execution Context

// when the js engine start reading the code one global execution gets created and all the variables and functions get it place or memory is allocated

var num = 2;
function cube(num) {
  return num * num * num;
}

var cube1 = cube(num);
var cube2 = cube(3);
