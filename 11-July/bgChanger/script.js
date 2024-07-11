const buttons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);

  //   addEventListener takes two things first is event and second function(callback function )
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;

    // console.log(e);

    // if (e.target.id === "pink") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "red") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "orange") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    //switch statement
  });
});
