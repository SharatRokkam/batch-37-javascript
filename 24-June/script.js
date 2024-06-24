// 1. Arithmetic
// 2. Assignment
// 3.Comparison
// 4. Logical
// 5. Conditional
// 6. Type
// 7. String
// 8. Bitwise

// 2. Assignment Operators = is used to assign value to any variable or function
// =(equal to), +=, -=, *=, /=, **=,

// let color = 'red';

//Double equal to will check the values
// let num = 5 != "5";
// console.log(num); // true

// Triple equal to checks the value and the datatype
// let num2 = 5 !== "5";
// let num3 = 5 > 10;
// console.log(num3);
// console.log(num2); //false

// let x = 10;
// x += 10; //x++
// x = x + 1;
// x = x - 1;
// x = x * 1
// x = x / 1;
// x = x % 1;
// console.log(x);

// Comparison Operator
// ==(double equal to), ===, !=, !==, >,<,<=,>=

// Logical Operator - &&(AND), ||(OR), !(NOT)

// let a = 10,
//   b = 20,
//   c = 30;

// && - when both the conditions are true then output will be true else false
// let result = a < b && b > c;
// false && false -> false
// true and true = true
// false and true = false
// true and false = false
// console.log(result);

// || - any one condition should pass out of the two condition
// let result2 = a < b || b > c; //false or true
// console.log(result2);

// let isNotTrue = !(a < b);
// console.log(isNotTrue);

// Conditional(Ternary Operator)

// if(condition){
//     //code
// }else{
//     // code
// }

// let age = "18";
// let num = true;
// condition ? 'yes' : "no "
// let canVote = age >= 18 ? "You can Vote" : "You cannot vote";
// console.log(canVote);
// let obj = {
//     name: 'MyName'
// }

// console.log(typeof obj);

// Conditional Statements are used to perform different actions based on different conditions

// 1. if statement
// 2. if else
// 3. if else if
// 4. switch

// let age = 9;

// if(condition){
//     code will get executed
// }

// if (age > 18) {
//   console.log("You are above 18 and you can vote");
// }
// else{
//     console.log("Sorry You cannot vote");
// }

// const score1 = prompt("enter your score");
// const score = Number(score1);

// if (score >= 90) {
//   console.log("A grade");
// } else if (score > 70) {
//   console.log("B Grade");
// } else if (score > 50) {
//   console.log("C Grade");
// } else if (score >= 35) {
//   console.log("D grade");
// } else {
//   console.log("Failed");
// }

// const score = 90;

// switch (true) {
//   case score >= 90:
//     console.log("A grade");
//     break;
//   case score >= 70:
//     console.log("B grade");
//     break;
//   case score >= 50:
//     console.log("C grade");
//     break;
//   case score >= 35:
//     console.log("D grade");
//     break;
//   default:
//     console.log("Failed");
//     break;
// }

// Using switch, write a program to find the day of the week

let day = 8;
let dayName; //declared

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid Day";
    break;
}

console.log(dayName);
