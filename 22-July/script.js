//Class is a blueprint for creating an objects. It defines  a type of object according to the properties(attributes) and methods that the objects can have ...........

// class Car {
//   constructor(brand, name) {
//     this.brand = brand;
//     this.name = name;
//   }

//   describe() {
//     return `${this.brand} ${this.name}`;
//   }
// }

//Function Constructor
// function Car(brand, name, color) {
//   this.brand = brand;
//   this.name = name;
//   this.color = color;

//   Car.prototype.describe = function () {
//     return `${this.brand} ${this.name} is of color ${this.color}`;
//   };
// }

// const myCar1 = new Car("BMW", "X1", "white");
// const myCar2 = new Car("Toyota", "Fortuner", "black");

// console.log(myCar1.describe());
// console.log(myCar2.describe());

// ----------------------------------------------------------------------------------------------------------

// Prototypes:  is an object from which other objects inherit properties and methods. Every object in js has a prototype which serves as a template from which it can get additional properties and methods.

// function Person(age, name, eyeColor) {
//   this.name = name;
//   this.age = age;
//   this.eyeColor = eyeColor;
// }

// const myFather = new Person(50, "Mohan", "blue");
// const myMother = new Person(45, "Something", "green");
// console.log(myFather);

// Person.prototype.nationality = "indian";

// console.log(myMother.nationality);

// ---------------------------------------------------------------------------
// Advanced Concepts  - Inheritance , Polymorphism, Encapsulation and Abstraction

// 1. Inheritance : allows a class to inherit properties and methods from another class. This promotes code reusability

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes noise`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); //call the parent class
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} is a ${this.breed}`);
//   }
// }

// const myDog1 = new Dog("Boxer", "GermanShephard");

// myDog1.speak();

//Polymorphism allows objects to be treated as instance of their parent class, while still invoking the correct overridden methods

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks...`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows...`);
  }
}

class Tiger extends Animal {
  speak() {
    console.log(`${this.name} dances`);
  }
}

const animals = [new Dog("Boxer"), new Cat("Sundari"), new Tiger("Leo")];

animals.forEach((animal) => animal.speak());

// ----------------------------------------------------------------------------------------------------

// Regular Expression(RegEx) and Form Validation 