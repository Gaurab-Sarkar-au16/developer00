'use strict';

// scoping in practise
// **************************************

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with the same name as other scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variables
//       output = 'NEW OUTPUT!';

//       const str = `Oh, you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//     function add(a, b) {
//       return a + b;
//     }

//     // console.log(str)
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting and The TDZ in practice
// **************************************

// Variables
console.log(me);
// console.log(job);
console.log(addArrow);
// console.log(year);

var me = 'vivek';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl);
console.log(addExpr);
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;
