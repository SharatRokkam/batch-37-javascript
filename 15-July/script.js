// Javascript is a single threaded synchronous language

//Synchronous - Line by line
//Asynchronous -

// The event loop continuously checks the call stack and the callback queue. If the call stack is empty,event loop takes the first function from the callback queue and pushes it onto the call stack for execution.

// let start = "Start of script";
// let end = "End of script";
// console.log(start);

// Web API - which is not part js
// setTimeout(function () {
//   console.log("First timeout completed 1");
// }, 1000);
// setTimeout(function () {
//   console.log("First timeout completed 3");
// }, 3000);
// setTimeout(function () {
//   console.log("First timeout completed 2");
// }, 2000);
// setTimeout(function () {
//   console.log("First timeout completed 4");
// }, 4000);

// console.log(end);

// setTimeout(() => {
//   console.log("first timeout");
// }, 6000);

// const myInterval = setInterval(() => {
//   console.log(
//     "second timeout- and this will keep getting printed after 5 seconds"
//   );
// }, 1000);

// clearInterval(myInterval);

// Callback Function, Promises, Async Await

// Callback Function - It is a function which is passed as an argument to another function, which gets invoked or called after the main functions completes its execution.

// Callbacks are essential for managing the outcomes of asynchronous tasks without blocking the programs' execution.

// function mainFunction(callback) {
//   console.log("performing some operation");

//   setTimeout(() => {
//     callback("operation completed");
//   }, 1000);
// }

// function callbackFunction(result) {
//   console.log("result : ", result);
// }

// mainFunction(callbackFunction);

// a, e , i , o , u

// Callback Hell - is a pyramid like structure which not much readable difficult to understand.

// Promise : Heaven for callback hell (es6)
//Aysnc Await (es7)

function printVowels() {
  setTimeout(() => {
    console.log("a");
    setTimeout(() => {
      console.log("e");
      setTimeout(() => {
        console.log("i");
        setTimeout(() => {
          console.log("o");
          setTimeout(() => {
            console.log("u");
          }, 1000);
        }, 3000);
      }, 2000);
    }, 1000);
  }, 6000);
}

printVowels();

// Method vs Function 
