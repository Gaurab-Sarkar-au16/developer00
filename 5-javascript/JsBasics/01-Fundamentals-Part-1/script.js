// values and variables
//**********************
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Gaurab");
// console.log(23);

// let firstName = "Vivek";
// console.log(firstName);

// let myFirstJob = "Quality Engineer";

// data types
//****************
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// javascriptIsFun = "YES!";

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;

// console.log(typeof null);

// let,const and var
//*******************
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; //this will not work

// var height = 50;

// basic operators
//******************
//Mathematical operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power 3

// firstName = "Shraddha";
// const lastName = "Sil";
// console.log(firstName + " " + lastName);

//Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

//Comparision operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

//Operator precedence
//******************

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avearageAge = ageJonas + ageSarah / 2;
// const avearageAgeCorrect = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, avearageAge, avearageAgeCorrect);

// Strings and template literals
//*******************************

// const firstName = "Mike";
// const job = "mechanic";
// const birthYear = 1960;
// const year = 2022;

// const statement =
//   "I'm" + firstName + ", a" + (year - birthYear) + " years old " + job + "!";
// console.log(statement);

// const statementNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(statementNew);

// console.log(`Just a regular string...`);

// console.log("String ith \n\
// multiple \n\
// lines");

// console.log(`String
// mmultiple
// lines`);

// if/else statement
//******************
// const age = 19;

// if (age >= 18) {
//   console.log(`Sarah can start deriving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century)

// Type Conversion and coersion
//******************************
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coersion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// Truthy and Falsy Values
//******************************

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money=0;
// if(money){
//   console.log("Dont spend it all ;)")
// } else {
//   console.log('You should get a job')
// }

// let height;
// if(height) {
//   console.log('YAY! height is defined')
// } else {
//   console.log('Height is UNDEFINED')
// }

// Equality Operators: == vs. ===
//*********************************

// let age = 18;
// if (age === 18) console.log('You just bacame an adult :D')

// age = '18';
// if (age === 18) console.log('You just bacame an adult :D')

// const favourite = Number(prompt("What's your favourite number?"))
// console.log(favourite)
// console.log(typeof favourite)

// if(favourite === 23) {
//   console.log('Cool! 23 is an amazing number')
// } else if(favourite === 7) {
//   console.log('7 is also a cool number')
// } else if(favourite===9){
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if(favourite !== 23) console.log('Why not 23?')

// Boolean logic:
//*********************************

// Logical Operators:
//*********************************
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); //and operator
// console.log(hasDriversLicense || hasGoodVision); //and operator
// console.log(!hasDriversLicense); //not operator

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// The switch statement:
//*********************************

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

// The Conditional(ternary) Operator:
//*************************************

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";

let drink2
if (age>=18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 💧'
}
console.log(drink2)

console.log(`I like to drink ${age>=18 ? "wine 🍷" : "water 💧"}`)