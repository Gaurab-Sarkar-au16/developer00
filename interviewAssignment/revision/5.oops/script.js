//1. constructor function
//========================
const Person = function (firstName, birthyear){
    //instance properties
    this.firstName = firstName;
    this.birthyear = birthyear;
}

Person.prototype.calAge = function(){
    console.log(2037 - this.birthyear)
}

const gaurab = new Person('Shraddha', 1993)
console.log(gaurab)

//instanceof to check 
console.log(gaurab instanceof Person)

//isPrototypeOf
console.log(Person.prototype.isPrototypeOf(gaurab))

Person.prototype.species = 'Homo Sapiens'

console.log(gaurab)
console.log(gaurab.species)

//hasOwnProperty
console.log(gaurab.hasOwnProperty('firstName'))
console.log(gaurab.hasOwnProperty('species'))

//Object.prototype is on top of the chain, that means its null
console.log(gaurab.__proto__)
console.log(gaurab.__proto__.__proto__)
console.log(gaurab.__proto__.__proto__.__proto__)

//2. es6 classes
// ==============
class PersonCl {
    constructor(firstName, birthyear){
        this.firstName = firstName
        this.birthyear = birthyear
    }

    calAge(){
        console.log(2037 - this.birthyear)
    }
}

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`)
}

// In JavaScript, a static method is a method that belongs to the class itself rather than an instance of the class. It is a method that is accessed directly on the class itself, rather than on individual objects created from the class.




