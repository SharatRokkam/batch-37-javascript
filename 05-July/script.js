// Math Methods and Date

// console.log(Math);

// Abs means absolute and it converts value from negative to positive but not vice versa
// console.log(Math.abs(24));

//ceil, floor and round

// console.log(Math.round(34.1));

//ceil will give you top value
// console.log(Math.ceil(34.13244942));
//floor will give you bottom value
// console.log(Math.floor(34.877));

// let array1 = [1, 34, 55, 6, 3, 5];
// console.log(Math.min(...array1));
// console.log(Math.max(...array1));

// console.log(Math.ceil(Math.random() * 10 + 1));

// let min = 1;
// let max = 6;
// Math.random will generate the numbers between 0 to 1
// Formula
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// ----------------------------------------------------------------------------------------------------------

// Everything in javascript is an Object

// Date
// let newDate = new Date();

// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toISOString());
// console.log(typeof newDate);

// let newDate = new Date("2002-2-5")
// let newDate = new Date("2-4-2023");
// let newDate = new Date(2002, 0, 3, 5, 20)

// console.log(newDate);

// console.log(Date.now());

// let newDay = new Date();

// console.log(newDay.getTime());
// console.log(newDay.getFullYear());
// console.log(newDay.getMonth() + 1);
// console.log(newDay.getDate());
// console.log(newDay.getHours());
// console.log(newDay.getMinutes());
// console.log(newDay.getSeconds());

// console.log(`${newDay.getHours()} : ${newDay.getMinutes()} : ${newDay.getSeconds()}`);

// Window -> Document -> HTML -> 1. Head and 2. Body
// Document Object Model : This is a tree like representation of the nodes of document(HTML file)
