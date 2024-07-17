// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// Promise constructor takes a callback function and that callback function will take two paramaters, resolve and reject

// Hope for the best and prepare for the worst
//Heaven for Callback Hell, which is introduced in ES6(2015)

//then, catch and finally

// let promise = new Promise(function (resolve, reject) {
//   let x = "I know Javascript";
//   let y = "I know Javascript";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(function () {
//     console.log("success");
//   })
//   .catch(function () {
//     console.log("failed");
//   });

// promise.then(function(){}).then(function(){})

// function printName(num, name, time) {
//   return new Promise((resolve, reject) => {
//     if (num == 2) {
//       setTimeout(() => {
//         console.log(name);
//         resolve("promise resolved");
//       }, time);
//     } else {
//       console.log("error");
//       reject("promise rejected");
//     }
//   });
// }

// function printSomething() {
//   printName(1, "something", 2000)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("operation completed"));
// }

// printSomething();

// This will lead you to callback hell, we can do this with promise

// function printVowels(){
//     setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {

//                 }, timeout);
//             }, timeout);
//     }, timeout);
// }

function printVowels(vowel, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(vowel);
      resolve("promise resolved");
    }, time);
  });
}

function runPrintVowels() {
  printVowels("printingVowels", 0)
    .then(() => printVowels("A", 5000))
    .then(() => printVowels("E", 2000))
    .then(() => printVowels("I", 1000))
    .then(() => printVowels("O", 3000))
    .then(() => printVowels("U", 6000));
}

runPrintVowels();


// Multiple use of .then is called as promise chaining 