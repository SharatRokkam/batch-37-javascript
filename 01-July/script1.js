// Closure : It is a combination of inner function and lexical environment created by the outer function.

// function outer() {
//   let newVar = 10;
//   function inner() {
//     function mostInner() {
//       console.log(newVar);
//     }

//     return mostInner();
//   }
//   return inner();
// }

// outer();

// Function Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. This allows for more flexible and reusable function compositions.

// let length = 10;
// function volume(length, breadth, height) {
//   return length * breadth * height;
// }

// console.log(volume(length, 4, 5));

// function volume(length) {
//   return function (breadth) {
//     return function (height) {
//       return length * breadth * height;
//     };
//   };
// }

// console.log(volume(3)(5)(5));
// console.log(volume(10)(5)(5));

// Using function currying take 3 numbers as argument and perform multiplication of all of them

// ---------------------------------------------------------------------------------------------

//Number Constructor
// let num = new Number(20);
//String Constructor
// let text = new String("new Word");
// Array Constructor
// let array1 = new Array(1, 3, "HelloWorld");

// console.log(num);
// console.log(text);
// console.log(array1);

// Function Constructor : 1. function name's first letter should be in Capital Letter, and it will be new keyword whenever calling of function happens

// function Addition(num1, num2) {
//   console.log(num1 + num2);
// }

// const newAdd = new Addition(4, 5); //creating new instance and passing the reference
// const newAdd1 = new Addition(6, 5); //creating new instance and passing the reference

// ------------------------------------------------------------------------------------
// Call, Apply and Bind
// These are just three ways of calling or invoking  a function
// Whenever we are calling a function using any of these three methods, we don't have to defined that first argument will object...

let user1 = {
  name: "Rahil",
  age: 25,
  isStudent: true,
  city: "Hyderabad",
};

let user2 = {
  name: "Shine",
  age: 27,
  isStudent: true,
  city: "Delhi",
};

//this function calling is without call, apply and bind
// function displayDetail() {
//   console.log("Hello inside the function", this);
//   console.log(this.name  + "is of age " + this.age);
// }

// displayDetail();

// "This" function is in global scope that is why "this" is referring to window object, or if it is in object it will refer to that object

function DisplayDetail(company, designation) {
  console.log("Hello inside constructor function", this);
  console.log(this.name + " is of age " + this.age, company, designation);
}

// call allows you to pass the argument individually
DisplayDetail.call(user1, "Microsoft", "FrontEnd");

//apply allow you to pass the argument in an array
DisplayDetail.apply(user2, ["TCS", "FullStack"]);

//bind will give you a new instance of object

const displayBind = DisplayDetail.bind(user1);
displayBind("Netflix", "Tester");
