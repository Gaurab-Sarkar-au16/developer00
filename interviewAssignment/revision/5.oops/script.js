//1. constructor function
//========================
const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;
};

Person.prototype.calAge = function () {
  console.log(2037 - this.birthyear);
};

const gaurab = new Person("Shraddha", 1993);
console.log(gaurab);

//instanceof to check
console.log(gaurab instanceof Person);

//isPrototypeOf
console.log(Person.prototype.isPrototypeOf(gaurab));

Person.prototype.species = "Homo Sapiens";

console.log(gaurab);
console.log(gaurab.species);

//hasOwnProperty
console.log(gaurab.hasOwnProperty("firstName"));
console.log(gaurab.hasOwnProperty("species"));

//Object.prototype is on top of the chain, that means its null
console.log(gaurab.__proto__);
console.log(gaurab.__proto__.__proto__);
console.log(gaurab.__proto__.__proto__.__proto__);

//2. es6 classes
// ==============
class PersonCl {
  constructor(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  }

  calAge() {
    console.log(2037 - this.birthyear);
  }
}

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// In JavaScript, a static method is a method that belongs to the class itself rather than an instance of the class. It is a method that is accessed directly on the class itself, rather than on individual objects created from the class.

// 3. object.create()
// ==================
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthyear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

// Inheritance
// ============

// constructor function, call method
const Car = function (make, speed) {
  this.make, this.speed;
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// es6 classes
//'super()' constructor function of parent class, responsible for creating the 'this' keyword in the subclass or child class so need to write at top
class PersonCL {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthyear, course) {
    super(fullName, birthyear);
    this.course = course;
  }
}

// Object.create()
const PersonProto0 = {
  calcAge() {
    console.log(2037 - this.birthyear);
  },
};

const StudentProto =Object.create(PersonProto0) 
const steve = Object.create(StudentProto);
console.log(steve);