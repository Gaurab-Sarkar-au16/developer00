'use strict';

//Constructor functions and new operators:
//========================================

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this
  // this.calcAge = function(){
  //   console.log(2037-this.birthYear)
  // }
};

const gaurab = new Person('Gaurab', 1991);
const jack = new Person('Jack', 1992);

console.log(gaurab, jack);

const jay = 'Jay';

console.log(gaurab instanceof Person);
console.log(jay instanceof Person);

//Prototypes:
//===========

console.log(Person.prototype);

//adding method to Person
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

gaurab.calcAge();
jack.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jack));

Person.prototype.species = 'Homo Sapiens';
console.log(gaurab, jack);

console.log(gaurab.hasOwnProperty('firstName'))
console.log(gaurab.hasOwnProperty('species'))