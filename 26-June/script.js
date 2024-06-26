// console.log('wrking');

// for, while and do while

// for in loop : iterates over the properties of the object...

// for (variable in object) {
// }

// const person = {
//   firstName: "John",
//   lastName: "Cena",
//   age: 48,
// };

// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// Merge two objects into a new object
// const obj2 = { a: 2, b: 5, c: 2, d: 8 };
// const obj1 = { a: 1, b: 3 };
// console.log(obj1);
// console.log(obj2);

// Object is reference type

//empty object
// let mergedObj = {};

// for (let key in obj2) {
//   mergedObj[key] = obj2[key];
// }

// for (let key in obj1) {
//   mergedObj[key] = obj1[key];
// }

//object destructuring
// let mergedObj2 = {...obj1, ...obj2}
// console.log(mergedObj2);

// for of loop iterates over the properties of iterables like array and object and string...

// for(variable of iterable){

// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// for (const number of numbers) {
//   console.log(number);
// }

// Print each character of string
// let language = "javascript";

// for (let key of language) {
//   console.log(key);
// }

// Print all the keys and values of the following object(for in)
// const car = { brand: "Mahindra", model: "Thar", year: 2023 };

// for (let key in car) {
//   console.log(`${key} : ${car[key]}`);
// }

// '' --> single quotation
// `` --> template literals or string interpolation
// ---------------------------------------------------------------------------------------------------

// Functions in Javascript are reusable block of code that is used perform specific task..
// Function makes the code modular, readable and reusable
// There are four ways of defining a function

// 1. Function declaration
// 2. Function Expression
// 3. Arrow Functions
// 4. Immediately Invoked function expression

// 1. function expression is oldest way of defining the function

// Every function will have function name , parameter, arguments and return

//creation a function

// a,b are parameter which is being passed to function()
// function sum(a, b, c) {
//     console.log(a + b);
//   return a + b + c;
// }

//invocation or calling of a function
// console.log(sum(5, 10, 12));
// console.log(sum(10, 10, 122));
// console.log(sum(13, 10, 12));

//Function declaration

// const square = function (a) {
//   console.log(a * a);
// };

// square(5);

// IIFE - needs to get executed just after it is defined, it is used execute something without interuppting the global scope as it create its own scope, it does not pollute the variables and function in global scope.

(function (name) {
  console.log("Hello " + name + "!");
})("Dave");

// Questions to solve
// 1. Iterate over the properties of the following object and print only the properties with numeric values
// const data = { a: 10, b: "hello", c: 20, d: "World" };

// 2. Iterate over the properties of the following object and calculate the sum of all numeric value 
// const data = { a: 10, b: "hello", c: 20, d: "World" };

//3. Iterate over the array and print elements that are greater than 10
// const array = [4, 13, 44, 3, 5, 55];

