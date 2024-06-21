// Numbers and String

// let fruit = "Hello";
// let veggies = new String(" Apple");

// console.log(fruit);
// console.log(veggies);

// String Concatenation
// let combinedVeggies = fruit + veggies;

// console.log(combinedVeggies);

// undefined, Null, Boolean, BigInt, Symbol

// boolean : true or false

// let isLoggedIn = true;
// let hasFinishedProject = false;

// console.log(isLoggedIn);
// console.log(hasFinishedProject);

// Null: manually and explicitly give the variable a empty

// let noUser = null;
// console.log(noUser);

//undefined
// let newUser; //declared but not initialized
// console.log(newUser);

//BigInt - display integer that are not countable

// let bigNumber = BigInt(101824702484802842848028402804820020420840840804);
// console.log(bigNumber);

//Symbol - ES6 - will always be unique

// let capital = Symbol("Hyderabad");
// let capital1 = Symbol("Hyderabad");

// console.log(capital === capital1);

// Generally use it in object keys to avoid name and avoid clashes in object

// Non-Primitive Datatypes
// 1. Array and 2. Object

// Everything in Javascript is an object

// Array : is an object which can store multiple data or value under one variable

// 1st Way
// let randomArray = ["Harish", 100, true];

// console.log(randomArray[3]);
// console.log(randomArray.length);

// 2nd Way
// let newArray = new Array();

// newArray[0] = "Sitaram";
// newArray[1] = 200;

// console.log(newArray);

// Object : it is used to store various keyed collections and more complex entities.

// syntax = {
//     key: value
// }
// let key1 = Symbol(123);

// let student = {
//   name: "Ajay",
//   age: 25,
//   isStudent: true,
//   [key1]: 123,
// };

//accessing the value
// console.log(student);
// console.log(student.isStudent);
// console.log(student[name]); //undefined
// console.log(student["age"]);
// console.log(student[key1]);

// Operators :  are used to perform operation operands....
// a + b = c
// a , b, c = operands
// + , = -> operators

// 1. Assignment
// Operator is used to assign value
// =, +=, -=, *= , /=, %=

// 2. Arithmetic
// Operator is used to perform math operations
// +, -, *, /, %, **, ++, --

// let b = 22;
// console.log(a + b);
// console.log(b - a);
// console.log(a * b); //multiplication
// console.log(a / b); //division
// console.log(b % a); // modulo(remainder)

// Increment = ++a (prefix) and a++(postfix)
// Decrement = --a (prefix) and a-- (postfix )

// let a = 10;
// a++;   10+1
// ++a;

// a--
// --a
// console.log(a);

// let c = 15;
// console.log(++c); //16
// console.log(c--); //16
// console.log(c++); //15
// console.log(c); //16

// console.log(--a); //9
// console.log(a) //9

// let d = 20;
// let result = d++ + ++d - --d + d--; 


// // 21 + 21 - 19 + 19 Incorrect
// // 20 + 22 - 19 + 19 incorrect


// // 20 + 22 - 21 + 21 //42
// // 20

// console.log(result); // 42
// console.log(d); //20

// 3.Comparison
// 4. Logical
// 5. Conditional
// 6. Type
// 7. String
// 8. Bitwise


// Questions to solve  *****
let a = 34;
let res = --a + a++ - --a - --a + a++
console.log(res);
console.log(a);

let e = 25;
e++;
let f = e++ + ++e - --e + e++ - e-- - ++e + e--;
console.log(f);
console.log(e);

