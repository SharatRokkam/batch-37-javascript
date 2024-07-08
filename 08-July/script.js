// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// 5 ways of accessing the elements
// 1. getElementsbyTagname
// 2. getElementbyID
// 3. getElementsbyClassName
// 4. querySelector
// 5. querySelectorAll

// HTMLCollection and NodeList

// const paragraph = document.getElementsByTagName("p");

// console.log(paragraph);

//textContent, innerText, innerHTML

// for (let i = 0; i < paragraph.length; i++) {
//   console.log(paragraph[i].textContent);
// }

//class is reserved keyword thats why we use className instead of class
// const div = document.getElementsByClassName("container");

// for (let i = 0; i < div.length; i++) {
//   div[i].innerText = "Text Changed";
// }

//textContent, innerText, innerHTML ---- using these methods we can manipulate the html content on the document

// const example = document.getElementById("example");

// console.log(example.innerHTML);
// console.log(example.textContent);
// console.log(example.innerText);

// -------------------------------------------------------------------------------

// const ul = document.querySelector("ul");
// console.log(ul.querySelector("li").innerText);
// ul.querySelector("li").textContent = "Veg food";

// ul.style.listStyleType = "none";
// ul.querySelector("li").style.color = "red";
// ul.querySelector("li").style.width = "100px";
// ul.querySelector("li").style.padding = "15px";
// ul.querySelector("li").style.backgroundColor = "black";

// const ul = document.querySelectorAll("ul");

// ul.forEach(function (item) {
//   item.style.color = "blue";
//   item.style.backgroundColor = "yellow";
//   item.style.padding = "30px";
//   item.style.fontSize = "30px";
//   item.style.textAlign = "center";
//   item.style.listStyleType = "none";
// });

// const attr = document.querySelector("#example").getAttribute("id");
// const attr2 = document.querySelector("#example").getAttribute("class");
// console.log(attr);
// console.log(attr2);

const attr = document
  .querySelector("#example")
  .setAttribute("class", "text random random1");
const attr2 = document.querySelector("#example").setAttribute("id", " random1");
