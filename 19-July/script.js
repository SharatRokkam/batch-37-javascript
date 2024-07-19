// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

// let favSubject = ["maths", "science", "computer", "history"];
// console.log(favSubject);

// let newSubject = ["geography"];
// let subjectCopy = [...favSubject, ...newSubject];
// console.log(subjectCopy);

// function add(a, b, c) {
//   return a + b + c;
// }

// let numbers = [1, 2, 4];

// console.log(add(...numbers));

// let obj1 = {
//   a: 1,
//   b: 2,
// };
// let obj2 = {
//   c: 3,
//   d: 5,
// };

// const mergeObj = { ...obj1, ...obj2 };
// const mergeObj2 = { obj1, obj2 };
// console.log(mergeObj);
// console.log(mergeObj2);

//Rest Operator(...) allows you to collect all the remaining elements in an array...
// It can be used as arguments(args) in the parameter of the array and it can destructure the array or object...

// const reduceVal = (...args) => {
//   return args.reduce((acc, cur) => acc + cur, 0);
// };

// console.log(reduceVal(1, 2, 4, 5));
// console.log(reduceVal(1, 2, 4, 3, 5, 6, 7));
// console.log(reduceVal(1, 2, 4, 5, 9.3, 3, -12));

//destructuring of Object
// let { a, b, ...c } = {
//   a: 1,
//   b: 3,
//   c: 5,
//   g: 4,
//   h: 7,
// };
// console.log(a);
// console.log(b);
// console.log(c);

//destructuring of object

// let [f, z, ...x] = ["one", "two", "three", "four"];

// let x, y, z; //declaration
// x = 9; //initialized
// y = 1;
// z = 10;

// console.log(f);
// console.log(z);
// console.log(x);
// --------------------------------------------------------------------------------------------

// Pass by Value and Pass by reference (Imp)

// Deep and Shallow Copy

// Shallow Copy :

let employee = {
  // Properties of object
  //   key : value
  name: "Akhilesh",
  age: 23,
  gender: "male",
};

//reference of the object
// let newEmployee = employee;
// console.log(employee);
// console.log(newEmployee);
// -------xxxx--------------before modification

// newEmployee.salary = 70000;
// newEmployee.city = "hyderabad";

// console.log(employee);
// console.log(newEmployee);

// Deep Copy

let newEmployee = JSON.parse(JSON.stringify(employee));

newEmployee.sal = 70000;
newEmployee.role = "frontEnd";

console.log(employee);
console.log(newEmployee);
