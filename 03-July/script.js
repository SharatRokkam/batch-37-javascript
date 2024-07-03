// 1. Suppose you have a number 121 you have to check if it is palindrome or not..
// madam -> madam, anna - anna, kick - kcik

// 2. const array1 = ['tomato', 'potato', 'ginger']
// add 'cabbage' to the first index and 'brinjal' to the last of the array...

// 3. const student = {
//     name : 'Mahesh Babu',
//     age : 48,
//     isActor : true,
// }

// you have to add a property for 'industry : tollywood', to this object...

// ------------------------------------------------------------------------------------------------------------

// Array Methods
// Array is collection of multiple data type as data where we store them under one variable

// let sports = new Array();

// sports[0] = "football";
// sports[1] = "cricket";
// sports[2] = "hockey";
// sports[3] = "basketball";
// sports[5] = "volleyball";

// console.log(sports);

// let fruits = ["orange", "apple", "banana"];

// push and pop
// push add one or more element at the end of the array
// pop removes one or more element from the end of the array

// fruits.push("grapes");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// Shift and Unshift

//unshift is used to add an element to the first index of the array
// fruits.unshift("mango");
// console.log(fruits);

//shift is used to remove an element from the first index of the array
// fruits.shift();
// console.log(fruits);

// create an array of numbers add and remove first and last element from the array

// slice : return a shallow copy of the array
// let numericals = [1, 3, 5, 6, 88, 32, 53];

// let slicedArray = numericals.slice(4, 7);
// console.log(slicedArray);
// console.log(numericals);

// Map , Filter and Reduce (React) - ES6

// let veggies = ["brinjal", "potato", "tomato", "ladyfingers", "carrot"];

// veggies.map((item) => console.log(item.toUpperCase()));

// let numbers = [1, 3, 5, 6, 88, 32, 53];

// let multiplied = numbers.map((item) => item * 2);
// console.log(multiplied);

// Filter :

// let numbers = [1, 3, 5, 6, 88, 32, 53];

// let even = numbers.filter((item) => item % 2 === 0);
// let odd = numbers.filter((item) => item % 2 !== 0);
// console.log(even);
// console.log(numbers);

// Reduce, ForEach and Sort

let numbers = [1, 3, 5, 6, 88, 32, 53];
// let numbers = [1, 3, 5, 9, 7, 4];

// let sum = numbers.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );

// console.log(sum);

// let joined = numbers.join();
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted);
