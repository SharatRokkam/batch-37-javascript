// console.log("working");
// Loops in Javascript : Loops are used to execute a block of code repeatedly until a specified condition is met.

// 1. for loop
// 2. while
// 3. do while
// 4. for in
// 5. for of

// for loop : is used when you know in advance how many times you want to execute the  block of code

// Syntax :
// for(initialization; condition; increment/decrement){}

// for (let i = 1; i < 10; i++) {}

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Another example of for loop(production level)
// Array of Object - 95%

// const arr = [{ name: "Kartheek" }, { name: "Guru" }];

// const obj = {
//   name: "Kartheek",
// };

// Calculate the total price of items in a shopping cart

// Write a logic to print the items in the console......(H W)
// const cart = [
//   { item: "Apple", price: 120, quantity: 8 },
//   { item: "Banana", price: 10, quantity: 12 },
//   { item: "Litchi", price: 20, quantity: 23 },
//   { item: "grapes", price: 20, quantity: 2 },
// ];

// console.log(cart);
// let totalPrice = 0;

// for (let i = 0; i < cart.length; i++) {
//   totalPrice += cart[i].price * cart[i].quantity;
//   totalPrice = totalPrice + cart[i].price * cart[i].quantity;
// }

// console.log("TotalPrice of Fruits", totalPrice);

//While Loop : repeats a block of code as long as a specified condition is true.....

// while(condition){
//   code to be executed
// }

// 1 to 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 10 to 1
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Do while : loop is similar to the while loop but it ensures that the code block is executed at least once

// Syntax:
// do {
//   do something at least once
// } while (condition);

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// Check if an array contains a specific value and if found print it in the console.....(for loop)

// const arr = [10, 20, 30, 40, 50];
// console.log(arr);
// const valueToFind = 60;
// let index = 0;
// let found = false;

// while (index < arr.length) {
//   if (arr[index] === valueToFind) {
//     found = true;
//     break;
//   }
//   index++;
// }

// if (found) {
//   console.log(`${valueToFind} is found in the array`);
// } else {
//   console.log(`${valueToFind} is not found in the array`);
// }

// const arr = [10, 20, 30, 40, 50];
// const valueToFind = 70;
// let found = false;
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === valueToFind) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log(`${valueToFind} is found in the array`);
// } else {
//   console.log(`${valueToFind} is not found in the array`);
// }
