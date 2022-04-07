'use strict';

// Default Parameters
// **************************

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * 1.2
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   booking.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// How Passing Arguments Works: Value vs. Reference
// ***************************************************

// const flight = 'LH234';
// const jonas = {
//   name: 'Bramha Baba',
//   passport: 24796513647856,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24796513647856) {
//     alert('Checed');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas)

// Functions Accepting Callback Functions
// ***************************************************

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn){
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`)

//   console.log(`Transformed by: ${fn.name}`)
// }

// transformer('JavaScript is the best!', upperFirstWord)

// transformer('JavaScript is the best!', oneWord)

// // JS uses callbacks all the time
// const high5 = function(){
//   console.log('🖐')
// }

// document.body.addEventListener('click', high5)

// ['Jonas', 'Martha', 'Adam'].forEach(high5)

// Functions Returning Functions
// *****************************************

// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`)
//   }
// }

// // const greet = greeting =>{
// //   return name => {
// //     console.log(`${greeting} ${name}`)
// //   }
// // }

// const greeterHey = greet('Hey')
// greeterHey('Jonas')
// greeterHey('Steven')

// greet('Hello')('Jonas')

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`)

// greetArr('Hi')('Jonas')

// The call and apply Methods
// *****************************************

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};

lufthansa.book(239, 'Vivek Bindra');
lufthansa.book(635, 'Jhon Smith');
console.log(lufthansa)

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book

// Does NOT work
// book(23,'Sarah Williams')

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss)

// Apply method
const flightData = [583,'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)

// The bind Method
// ************************

const bookEW = book.bind(eurowings)
bookEW(23, 'Steven Williams')

