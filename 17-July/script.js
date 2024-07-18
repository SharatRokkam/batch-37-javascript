// function printVowels(vowel, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(vowel);
//       resolve("promise resolved");
//     }, time);
//   });
// }

// const asyncFunc = async () => {
//   await printVowels("A", 2000);
//   await printVowels("E", 1000);
//   await printVowels("I", 5000);
//   await printVowels("O", 2000);
//   await printVowels("U", 7000);
// };

// asyncFunc();

// create an async function where you have to print 2,4,6,8,10 after 2,4,3,5,10 seconds

// function runPrintVowels() {
//   printVowels("printingVowels", 0)
//     .then(() => printVowels("A", 5000))
//     .then(() => printVowels("E", 2000))
//     .then(() => printVowels("I", 1000))
//     .then(() => printVowels("O", 3000))
//     .then(() => printVowels("U", 6000));
// }

// runPrintVowels();

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     Expected output: "resolved"
//   }

//   asyncCall();

// JSON: Javascript Object Notation
// MiddleWare - is middleman between user and server
// API - Application programming interface

// {
//   student = [
//     {
//       name: "Sharat",
//       age: 22,
//       email: "again@email.com",
//     },
//     {
//       name: "Harish",
//       age: 2,
//       email: "again@email.com",
//     },
//     {
//       name: "Kartheek",
//       age: 23,
//       email: "again@email.com",
//     },
//     {
//       name: "kaveri",
//       age: 22,
//       email: "again@email.com",
//     },
//   ];
// }

// JSON - structure format of data
// JSON.parse and JSON.stringify

// JSON.parse will convert the json object to object
// json.stringify will convert the object to json object

// let jsonObj =
//   '{ "name": "something", "email": "be@gamil.com", "isloggedIn": true }';

// let jsonParse = JSON.parse(jsonObj);
// console.log(jsonParse);

// let onlyObj = { name: "mohan", inClass: 10 };

// let jsonStringfy = JSON.stringify(onlyObj);
// console.log(jsonStringfy);

// ----------------------------------------------------------------------------------------------

// Fetch : to get or retrieve something from somewhere(english)
// Fetch : we need data that can be fetched from API or resource

document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();

      populateData(data);
    } catch (error) {
      console.error("Error", error);
    }

    function populateData(data) {
      const tableBody = document.querySelector(".table-data tbody");

      data.forEach((post) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const completedCell = document.createElement("td");
        completedCell.textContent = post.completed;
        row.appendChild(completedCell);

        tableBody.appendChild(row);
      });
    }
  }
  fetchData();
});
