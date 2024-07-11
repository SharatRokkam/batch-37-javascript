function newLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
newLanguage("bhaiLang");
newLanguage("Dot Net");

//Edit or Update

//Pseudo Selector
// const secondLang = document.querySelector("li:nth-child(2)");
// console.log(secondLang);

// secondLang.innerHTML = "Python";

// const newLi = document.createElement('li');
// newLi.textContent = 'GoLang';
// secondLang.replaceWith(newLi)

// const firstLang = document.querySelector("li:first-child");

// firstLang.outerHTML = `<li>Typescript</li>`;

//Remove

const lastLang = document.querySelector("li:last-child");

lastLang.remove();
