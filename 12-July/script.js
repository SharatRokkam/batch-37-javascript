// Event Handling and Events
// Events are fired to notify code of "interesting changes" that may affect code execution

//inline event handling and script, out of this script will be having the highest priorities.

// btn.onclick = function () {
//   console.log("button was clicked: handler 1");
// };

// btn.onclick = function () {
//   console.log("button was clicked : handler 2");
// };

// addEventListener and removeEventListener

// const btn = document.querySelector("#btn");

// node.addeventListener("event", callback);

// addEventListener takes one event object which stores all the data of the event

// btn.addEventListener("click", (evt) => {
//   console.log("handler 1");
// });

// whenever you apply removeEventListener, reference of the callback function should be same
// const removed = (evt) => {
//   console.log("handler 2");
// };

// btn.addEventListener("click", removed);

// btn.removeEventListener("click", removed);

// btn.addEventListener("click", (evt) => {
//   console.log("handler 3");
// });

let toggle = document.querySelector("#btn");
let mode = false;

toggle.addEventListener("click", () => {
  if (mode === false) {
    console.log("black");
    document.querySelector("body").style.backgroundColor = "black";
    mode = true;
  } else {
    console.log("white");
    document.querySelector("body").style.backgroundColor = "white";
    mode = false;
  }
});
