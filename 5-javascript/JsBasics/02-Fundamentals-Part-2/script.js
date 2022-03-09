// Strict mode
// *************************
"use strict";

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log(`I can drive :D`)

// const interface = 'Audio'
// const private = 534

// Functions
// *************************
// function logger() {
//   console.log("My name is Vivek");
// }

// calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice=fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice)

// Function Declarations vs. Expressions
// ***************************************
// Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow functions
// ***************************************
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Vivek'))
// console.log(yearsUntilRetirement(1993, 'Bob'))

// Functions Calling Other Functions
// ***************************************
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple and ${orangePieces} orange.`;
  return juice;
}

fruitProcessor(2, 3);

// Reviewing Functions
// ***************************************
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Vivek"));
console.log(yearsUntilRetirement(1950, "Bramha"));