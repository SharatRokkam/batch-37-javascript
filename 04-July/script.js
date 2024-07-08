// Array Methods : push pop, shift, unshift, sort, map, filter, reduce, slice, join, concat, reverse, split
//find, some , every -- its your task..!!
// forEach, Splice

// For, ForIn, ForOf, forEach

// let numbers = [1, 4, 5, 6, 8];

// numbers.map((x) => console.log(x * 2));

// let fruits = ["aPPle", "Mango", "BAnana", "Grapes"];
// fruits.forEach((x) => console.log(x.toLowerCase()));

// let lower = fruits.map((y) => y.toLowerCase());
// console.log(lower);
// console.log(lowerCase);

// Slice
// let bikes = ["splendor", "passion", "thunderbird", "Apache"];

// let bike = bikes.slice(1, 3);
// console.log(bike);
// console.log(bikes);

// Splice : Add Element, Remove Element and Replace Element

// let bikes = ["splendor", "passion", "thunderbird", "Apache"];

// bikes.splice(startCount, DeleteCount, item1, item2)

//Remove
// let newBike =bikes.splice(1, 1)
// console.log(newBike);
// console.log(bikes);

//Add
// let newBike = bikes.splice(1, 2, "Shine");
// console.log(bikes);

// Replace
// let newBike = bikes.splice(0, 4, "Activa", "Access", "NTorq");
// console.log(newBike);
// console.log(bikes);

// ------------------------------------------------------------------------------------------------

// Object : collections of property written inside curly braces, properties are in the form of key and value pair

// In four ways we can create an object
// 1. Object Literal

// let person = {
//   name: "Random",
//   age: 23,
// };

// 2. new Constructor

// let person = new Object();

// person.firstName = 'GuruRaj';
// person.lastName = 'Prasad'
// person.age = 23;

// console.log(person);

// 3. function Constructor

// function Person(name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
// }

// const person = new Person("joHn", 34, "174cm");
// console.log(person);

// 4. ES6 Classes

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("joHn", 34);
// console.log(person);

// ---------------------------------------------------------------------------------------------

// let key = Symbol(123);

let student = {
  name: "Random",
  age: 23,
  //   [key]: 'newkey1',
};

// Access a property of object
//Dot Notation
// console.log(student.name);
//Bracket Notation
// console.log(student);
// console.log(student[key]);

// Modify the property of the object
// student.name = "NonRandom";
// student["age"] = 54;

//Remove the property of the object
// delete student.age;
// delete student["name"];
// console.log(student);

//adding an nested object

student.details = {
  height: "160cm",
  weight: "70kg",
  complexion: "fair",
  greet: function () {
    console.log("Hello inside the object");
  },
};

// console.log(student.details.greet());

let car = {
  name: "SUV500",
  fuel: "petrol",
  color: "white",
};

let bike = {
  name: "ducati",
  color: "red",
  gears: 7,
};

// let keys = Object.keys(car);
// let values = Object.values(car);
// console.log(keys);
// console.log(values);
let assign = Object.assign(car, bike);
console.log(assign);

// console.log(Object.keys(student.details));
