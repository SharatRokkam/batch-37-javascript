// Numbers:

// const score = 100.4454222;
// console.log(score.toFixed(2));
// console.log(marks);

// const newNumber = 124343434343;

// console.log(newNumber.toExponential(2));

// const precisionValue = 123.6;
// console.log(typeof precisionValue);

// console.log(precisionValue.toPrecision());

// console.log(precisionValue.toString());
// console.log(typeof precisionValue);

// const marks = new Number(34);
// console.log(marks.valueOf());

// ----------------------------------------------------------------------------------------------

// String Methods

// let name1 = new String("Lahari");

// console.log(name);

// charAt returns the character at specified index
// console.log(name1.charAt(0));

// let lang = "Hello";
// let lang2 = " Javascript";

// let newString = lang.concat(lang2);
// let lang3 = " React";

// let newString1 = newString.concat(lang3);
// console.log(newString1);

//returns the length of the string
// console.log(lang.length);

// indexof return the first occurence of the substring
// console.log(lang.indexOf("l"));

// console.log(lang.lastIndexOf("l"));

// returns the string that contains the concatenation of two or more string

//checks if the string contains a specified substring and returns true or false...
// console.log(sports.includes('z'));

// console.log(sports.repeat(3));

// console.log(sports.toUpperCase());
// console.log(sports.toLowerCase());

// console.log(sports.replace("cricket", "football"));

// console.log(sports.search("love"));

// console.log(sports.slice(2, 6));
// console.log(sports);

// let sports = "I love cricket";

// console.log(sports.split(""));

// console.log(sports);

// console.log(sports.trim(""));

// console.log(sports.match(/c/g));

// let fruits = ['mango', 'apple', 'guava'];

// console.log(fruits);
// console.log(fruits.join());

// Reverse the string
let lang = "Vangala Sai Kartheek";

//Multi Line
let split = lang.split("");
console.log(split);

let reverse = split.reverse();
console.log(reverse);

console.log(reverse.join(""));

//Single Line
let reverse1 = lang.split("").reverse().join("");
console.log(reverse1);
