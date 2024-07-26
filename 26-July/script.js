// Fade In will make the element visible if it  is invisible

// $(document).ready(function () {
//   $("button").click(() => {
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(1000);
//   });
// });

// FadeOut will make the element invisible if it is visible

// $(document).ready(function () {
//   $("button").click(() => {
//     $("#div1").fadeOut();
//     $("#div2").fadeOut("slow");
//     $("#div3").fadeOut(2000);
//   });
// });

// If element is visible then invisible and vice versa

//shorthand in jQuery
// $(function(){
//     $("button").click(function(){

//     })
// })

// $(function () {
//   $("button").click(() => {
//     $("#div1").fadeToggle();
//     $("#div2").fadeToggle("slow");
//     $("#div3").fadeToggle(2000);
//   });
// });

// ------------------------------------------------------------------------------------------------

// We can add custom animations with jQuery

// $("selector").animate({ params }, speed, callback);

// $(function () {
//   $("button").click(function () {
//     $("#div1").animate({
//       left: "200px",
//       height: "100px",
//       width: "100px",
//       opacity: "0.4"
//     });
//   });
// });

// $(document).ready(function () {
//   //recursive
//   function bounceBall() {
//     $("#ball")
//       .animate({ top: "380px" }, 500, "swing")
//       .animate({ top: "0px" }, 500, "swing", bounceBall);
//   }

//   bounceBall();
// });

// -------------------------------------------------------------------------------

// AJAX - Asynchronous Javascript and XML (extensible markup language)

// AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

// In short; AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.

// Get, Post, Put and Delete
//CRUD - create, read, update and delete

$(document).ready(function () {
  $("#btn").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos/2",
      type: "GET",
      success: function (response) {
        $("#response").html(`<h2>Title : ${response.title}</h2>
            <p>Body: ${response.completed}</p>`);
      },

      error: function (status, error) {
        $("#response").html(`<h2>Error : ${status}</h2>
            <p>${error}</p>`);
      },
    });
  });
});
