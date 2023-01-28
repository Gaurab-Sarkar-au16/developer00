// Inheritance between "classes": constructor functions
// =====================================================

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

//Because mike is showing Person as prototype not student
//so we correct it this way
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance between "classes": ES6 Classes
// ===========================================

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods
  calcAge() {
    console.log(2038 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2038 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Namaste my friend 😁`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //Overwriting the calcAge() of PersonCl
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but feels older due to studying alot`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Economics');
console.log(martha);
martha.introduce();
martha.calcAge();

// class StudentCl2 extends PersonCl{}

// const martha2 = new StudentCl2('Martha Jones', 2012);
// console.log(martha2)

// Inheritance between "classes": Object.create
// =============================================

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Magic');
jay.introduce();

// Another Class Example:
// ======================

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }
  //Public interface, like API
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approvrLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

// Encapsulation: Protected Properties and Methods
// ================================================

class AccountEncapsulation {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //private property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  //Public interface, like API
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //private method
  _approvrLoan(val) {
    return true;
  }
}

const acc2 = new AccountEncapsulation('Jonas', 'EUR', 1111);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc2.deposit(250);
acc2.withdraw(140);

console.log(acc2.getMovements());

console.log(acc2);

//Encapsulation: Private Class Fields and Methods
//================================================

class AccountClassFields {
  //1) Public fields
  locale = navigator.language;

  //2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //private property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //3) Public methods
  //Public interface, like API
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this
  }
  withdraw(val) {
    this.deposit(-val);
    return this
  }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this
    }
  }

  static helper(){
    console.log('Helper')
  }

  //4) Private method
  // #approveLoan(val) {
  //   return true;
  // }
  _approveLoan(val) {
    return true;
  }
}

const acc3 = new AccountClassFields('Jim', 'EUR', 1111);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc3.deposit(250);
acc3.withdraw(140);

console.log(acc3.getMovements());

console.log(acc3);

AccountClassFields.helper()

// trying to access the private field will give error
// console.log(acc3.#movements)
// console.log(acc3.#pin)

// Chaining Methods
// =================

acc3.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc3.getMovements())