/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀*/

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) {
  //  const humansAge = ages.map(function(dogAge){
  //    if (dogAge<=2) {
  //      return 2*dogAge
  //    } else if (dogAge>2){
  //      return 16+dogAge*4
  //    }
  //  })
  const humansAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humansAge);

  const filterHumansAge = humansAge.filter((age) => age >= 18);
  console.log(filterHumansAge);

  //  const sumOfAges = filterHumansAge.reduce((acc,age) => acc + age, 0)
  //  console.log(sumOfAges/filterHumansAge.length)

  // const average = filterHumansAge.reduce((acc,age) => acc + age, 0) / filterHumansAge.length

  // (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5
  const average = filterHumansAge.reduce((acc,age,i,arr) => acc + age / arr.length, 0) 

  console.log(average)
};
calcAverageHumanAge(data1);
