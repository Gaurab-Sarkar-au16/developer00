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

// const friends =['miki','manoj','rahul']

// // Add elements
// const newLength = friends.push('Jay')
// console.log(friends, newLength)

// friends.unshift('John')
// console.log(friends)

// // Remove elements
// const popped = friends.pop()// Last
// console.log(popped)
// console.log(friends)

// friends.shift()// First
// console.log(friends)

// console.log(friends.indexOf('rahul'))
// console.log(friends.indexOf('bob'))

// friends.push(23)
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(27))

// if(friends.includes('manoj')){
//   console.log('You have friend called Steven')
// }

// Introduction to Objects
// ***************************************

// const vivekArray = [
//   'Vivek',
//   'Kumar',
//   2022-1993,
//   'teacher',
//   ['manoj','aakash','budek']
// ]

// const vivek = {
//   firstName: 'Vivek',
//   lastName: 'Kumar',
//   age: 2022 - 1993,
//   job: 'teacher',
//   friends: ['manoj','aakash','budek']
// }

// Dot vs. Bracket Notation
// ***************************************

// const vivek = {
//   firstName: 'Vivek',
//   lastName: 'Kumar',
//   age: 2022 - 1993,
//   job: 'teacher',
//   friends: ['manoj','aakash','budek']
// }
// console.log(vivek)

// console.log(vivek.lastName)
// console.log(vivek['lastName'])

// const nameKey= 'Name'
// console.log(vivek['first'+nameKey])
// console.log(vivek['last'+nameKey])

// const interedtedIn = prompt(`What do you want to know about Vivek? Choose between firstName, lastName, age, job and friends`)

// if(vivek[interedtedIn]){
//   console.log(vivek[interedtedIn])
// } else {
//   console.log(`Wrong request!Choose between firstName, lastName, age, job and friends`)
// }

// vivek.location = 'Bhilai';
// vivek['twitter'] = '@vivekKumar'
// console.log(vivek)

// // Challenge
// // create a dynamic sentence like "Jonas has 3 friends, and his best friend is called Michael(first friend in the list)"

// console.log(`${vivek.firstName} has ${vivek.friends.length} friends, and his best friend is called ${vivek.friends[0]}`)

// Object Methods
// ***************************************
// const vivek = {
//   firstName: "Vivek",
//   lastName: "Kumar",
//   birthYear: 1993,
//   job: "teacher",
//   friends: ["manoj", "aakash", "budek"],
//   hasDriversLicense: false,

//   // calcAge: function(birthYear){
//   //   return 2037 - birthYear
//   // }

//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// // console.log(vivek.calcAge(1991));
// // console.log(vivek["calcAge"](1991));

// // console.log(vivek.calcAge())

// console.log(vivek.calcAge());
// console.log(vivek.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(vivek.getSummary());

// // Iteration: The for Loop
// // ***************************************

// console.log("Lifting weigths repetition 1 🏋️‍♂️");
// console.log("Lifting weigths repetition 2 🏋️‍♂️");
// console.log("Lifting weigths repetition 3 🏋️‍♂️");
// console.log("Lifting weigths repetition 4 🏋️‍♂️");
// console.log("Lifting weigths repetition 5 🏋️‍♂️");
// console.log("Lifting weigths repetition 6 🏋️‍♂️");
// console.log("Lifting weigths repetition 7 🏋️‍♂️");
// console.log("Lifting weigths repetition 8 🏋️‍♂️");
// console.log("Lifting weigths repetition 9 🏋️‍♂️");
// console.log("Lifting weigths repetition 10 🏋️‍♂️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weigths repetition ${rep} 🏋️‍♂️`);
// }

// Looping Arrays, Breaking and Continuing
// *******************************************

// const vivek = [
//   "Vivek",
//   "Kumar",
//   2022 - 1993,
//   "teacher",
//   ["manoj", "aakash", "budek"],
// ];

// const types = [];

// for (let i = 0; i < vivek.length; i++) {
//   // Reading from jonas array
//   console.log(vivek[i], typeof vivek[i]);

//   // Filling types array
//   // types[i] = typeof vivek[i]
//   types.push(typeof vivek[i]);
// }

// console.log(types);

// const years = [1991, 2007, 2010, 2005, 1993];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log(`--- ONLY STRINGS ---`);
// for (let i = 0; i < vivek.length; i++) {
//   if (typeof vivek[i] !== "string") continue;
//   console.log(vivek[i], typeof vivek[i]);
// }

// console.log(`--- BREAK WITH NUMBER ---`);
// for (let i = 0; i < vivek.length; i++) {
//   if (typeof vivek[i] === "number") break;
//   console.log(vivek[i], typeof vivek[i]);
// }

// Looping Backwards and Loops in Loops
// *******************************************

// const vivek = [
//   "Vivek",
//   "Kumar",
//   2022 - 1993,
//   "teacher",
//   ["manoj", "aakash", "budek"],
// ];

// // 0,1,..,4
// // 4,3,..,0

// for (let i = vivek.length - 1; i >= 0; i--) {
//   console.log(i, vivek[i]);
// }

// for(let exercise =1; exercise<4; exercise++){
//   console.log(`---------- Starting exerise ${exercise}`)

//   for(let rep = 1; rep<6; rep++){
//     console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`)
//   }
// }

// The while Loop
// *******************************************
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`While: Lifting weights repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

let dice = Math.trunc(Math.random()*6)+1
// console.log(dice)

while(dice !== 6){
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random()*6)+1
  if(dice===6) console.log(`Loop is about to end...`)
}

