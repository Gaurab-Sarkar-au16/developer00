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
// console.log(me);
// // console.log(job);
// console.log(addArrow);
// // console.log(year);

// var me = 'vivek';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl);
// console.log(addExpr);
// console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x)
// console.log(y === window.y)
// console.log(z === window.z)

// The this Keyword in Practice
// **************************************
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// Regular Functions vs. Arrow Functions
// *****************************************
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;//self or that
    // const isMillenial = function(){
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    //   // console.log(this.year >= 1981 && this.year <= 1996)
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments)
  a + b;
};
addArrow(2,5,8)

// Primitives vs. Objects (Primitive vs. Reference Types)
// *********************************************************

