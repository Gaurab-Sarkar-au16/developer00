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

console.log(gaurab.hasOwnProperty('firstName'));
console.log(gaurab.hasOwnProperty('species'));

// Prototypal inheritance on Built-In Objects
// ===========================================
console.log(jack.__proto__);
// Object.prototype(top of prototype chain)
console.log(jack.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

const h1 = document.querySelector('h1');
console.dir(h1);

const func = x => x + 1;
console.dir(func);

// ES6 classes
// ===========

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1995);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// Setters and Getters
// ====================

const account = {
  owner: 'jack',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
//normally: console.log(account.latest())

account.latest = 50;
//normally: account.latest(50)
console.log(account.movements);

//getters and setters in class
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const james = new PersonCl2('James', 1992);
//normally
// console.log(james.age())
//with setters and getters
console.log(james.age);

class PersonCl3 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  
  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const joy = new PersonCl3('Joy hero', 1993);
console.log(joy);

// Static Methods
// ===============

class PersonCl4 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }  
}

const riya = new PersonCl4('Riya',1998)
console.log(riya)

//instance methods
Person.prototype.bye = function(){
  console.log('Bye 🙋‍♀️')
}

//static method
Person.hey = function(){
  console.log('Hey there 😀')
}

Person.hey()

// Object.create
// ==============

const PersonProto = {
  calcAge(){
    console.log(2037-this.birthYear)
  },
  init(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)
console.log(steven)

steven.name = 'Steven'
steven.birthYear = 2022
steven.calcAge()

console.log(steven.__proto__)

const sarah = Object.create(PersonProto)
sarah.init('Sarah',1979)
sarah.calcAge()

// Inheritance between "classes": constructor functions
// =====================================================
