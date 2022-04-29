/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/
// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// GOOD LUCK 😀

// 1.
dogs.forEach(function (dog) {
  dog.foodPortion = Math.round(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.
dogs.forEach(function (dog) {
  if (dog.owners.includes("Sarah")) {
    console.log(
      `Dog eating too ${dog.curFood > dog.foodPortion ? "much" : "less"}`
    );
  }
});

// 3.
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach((dog) => {
//   if (dog.curFood > dog.foodPortion) ownersEatTooMuch.push(dog.owners);
//   else ownersEatTooLittle.push(dog.owners);
// });

// console.log(ownersEatTooMuch.flat());
// console.log(ownersEatTooLittle.flat());
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.foodPortion)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood > dog.foodPortion)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);

// 5.
// console.log(
//   `There are ${
//     dogs.find((dog) => dog.curFood == dog.foodPortion) ? "some" : "no"
//   } dogs that eat exactly the amount of food that is recommended `
// );

// 6.
// console.log(
//   `There is ${
//     dogs.find(
//       (dog) =>
//         dog.curFood > dog.foodPortion * 0.9 &&
//         dog.curFood < dog.foodPortion * 1.1
//     )
//       ? "a"
//       : "no"
//   } dog that eats an okay amount of food`
// );
const checkEatingOkay = (dog) =>
  dog.curFood > dog.foodPortion * 0.9 && dog.curFood < dog.foodPortion * 0.1;

console.log(dogs.some(checkEatingOkay));

// 7.
// const okAmount = dogs.filter(
//   (dog) =>
//     dog.curFood > dog.foodPortion * 0.9 && dog.curFood < dog.foodPortion * 1.1
// );
// console.log(okAmount);
console.log(dogs.filter(checkEatingOkay));

// 8.
// const shallowCopy = dogs.slice().sort((a, b) => {
//   a.foodPortion > b.foodPortion ? 1 : -1;
// });
// console.log(shallowCopy);

// Sort it by recommended food portion in an ascending order
const dogsCopy = dogs.slice().sort((a, b) => a.foodPortion - b.foodPortion);
console.log(dogsCopy);
