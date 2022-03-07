// values and variables
//**********************
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Gaurab");
console.log(23);

let firstName = "Vivek";
console.log(firstName);

let myFirstJob = "Quality Engineer";

// data types
//****************
let javascriptIsFun = true;
console.log(javascriptIsFun);
javascriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);
year = 1991;

console.log(typeof null);

// let,const and var
//*******************
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; //this will not work

var height = 50;

// basic operators
//******************
//Mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power 3

firstName = "Shraddha";
const lastName = "Sil";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Comparision operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//Operator precedence
//******************

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avearageAge = ageJonas + ageSarah / 2;
const avearageAgeCorrect = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avearageAge, avearageAgeCorrect);

// Strings and template literals
//*******************************

const firstName = "Mike";
const job = "mechanic";
const birthYear = 1960;
const year = 2022;

const statement =
  "I'm" + firstName + ", a" + (year - birthYear) + " years old " + job + "!";
console.log(statement);

const statementNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(statementNew);

console.log(`Just a regular string...`);

console.log("String ith \n\
multiple \n\
lines");

console.log(`String
mmultiple 
lines`);

// if/else statement
//******************
const age = 19;

if (age >= 18) {
  console.log(`Sarah can start deriving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)

// Type Conversion and coersion
//******************************

