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
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple and ${orangePieces} orange.`;
//   return juice;
// }

// fruitProcessor(2, 3);

// Reviewing Functions
// ***************************************
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Vivek"));
// console.log(yearsUntilRetirement(1950, "Bramha"));

// Introduction to Arrays:
// ***************************************

// const friends =['miki','manoj','rahul']
// const year = new Array(1991,1995,2013,2022)

// console.log(friends[0])
// console.log(year[0])

// console.log(friends.length)
// console.log(friends[friends.length-1])

// friends[2]='Jay'
// console.log(friends)

// const firstName = 'Gaurab'
// const gaurab = [firstName, 'Sarkar', 2037-1992, 'meditator', friends]
// console.log(gaurab)

// // Exercise
// const calcAge = function(birthYear){
//   return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// // console.log(calcAge(years))

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length-1])

// console.log(age1,age2,age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]

// console.log(ages)

// Basic Array Operations (Methods)
// ***************************************

const friends =['miki','manoj','rahul']

// Add elements
const newLength = friends.push('Jay')
console.log(friends, newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
const popped = friends.pop()// Last
console.log(popped)
console.log(friends)

friends.shift()// First
console.log(friends)

console.log(friends.indexOf('rahul'))
console.log(friends.indexOf('bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(27))

if(friends.includes('manoj')){
  console.log('You have friend called Steven')
}