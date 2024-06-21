// Variables
// Let, var and const - keywords(inbuilt)

// var - is the oldest way of creating a variable in 1995-2015, var can declared and initialized on the same as well on the different, var is functioned or global scope meaning if it is defined inside a global scope it will accessible anywhere throughout the program, but if it is defined inside a function it will be accessible inside the function only....

// keyword variableName = value;

// var declaration = initialization
// var myVariable = 100;

// console.log(myNewVariable);
// var myNewVariable; //declaration
// myNewVariable = 200; // initialization

// alert(myNewVariable);

// Scope in Javascript are three parts -- global scope, functioned scope or block scope

// function newFunc() {
//   var newWord = "Hello World";
//   newWord = 10;
//   console.log(newWord);
// }

// newFunc();
// console.log(a);

// Var can be redeclared and reintialized, that is the disadvantage of var keyword,
// Let can be reinitialized and cannot be redeclared, let is block or local scope variable
//Const  cannot be reinitialized and nor it can redeclared, const is block scope, const should declared and initialized on the same.

// {
//   let newVar = 100;
//   console.log(newVar);
// }

//Hoisting and Temporal Dead Zone

// console.log(nayaVariable);
// var nayaVariable = "javascript";

// console.log(variableNew);
// const variableNew = "newWord";

// Hoisting is the phenomena in js where if it is declared with var keyword, all the variables move to the top of the program, so that you are able to access it, and it will give undefined.

// console.log(newString);
// var newString;
// newString = "Hoisting";

//Temporal Dead Zone - is the area or moment  of time where the variable defined with let and const cannot be accessible before its initialization

// let or const
// {
// console.log(newString) //reference error
// *tDZ*********************************
// *TDZ*****************************
// *tdz*******************************
//   let newString = "TDZ";

//   console.log(newString);
// }

// DataTypes: In Javascript, data type has been categorized in two ways(basic but important)
// 1. Primitive data types
// 2. Non-primitive data type

// Primitive Data types
// 1.Number 2. String 3. Undefined 4. Boolean 5. Null 6. BigInt(ES11) 7. Symbol(ES6)

// Non-primitive Datatypes(user-defined datatype or reference datatype)
// 1. Array 2. Object

// Number : integer, float and decimal
let first = 100;
// let second = 100.500;
console.log(first);

// Using NumberConstructor ------------
let secondWay = new Number(3900);
console.log(secondWay);


// String 
// let color = 'yellow';
// console.log(color);

// let vegetable = new String("Potato")
// console.log(vegetable);

