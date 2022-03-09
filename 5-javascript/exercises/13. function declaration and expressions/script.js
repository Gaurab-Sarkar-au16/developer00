'use strict'
const worldPopulation = 7900

function percentageOfWorld1 (population) {
  return (population/worldPopulation)*100;
}

const percentageOfWorld2 = function (population) {
  return (population/worldPopulation)*100;
}

const indiaPercentage1 = percentageOfWorld1(1380)
const indiaPercentage2 = percentageOfWorld2(1380)
console.log(indiaPercentage1, indiaPercentage2)

const chinaPercentage1 = percentageOfWorld1(1441)
const chinaPercentage2 = percentageOfWorld2(1441)
console.log(chinaPercentage1,chinaPercentage2)

const russiaPercentage1 = percentageOfWorld1(140)
const russiaPercentage2 = percentageOfWorld2(140)
console.log(russiaPercentage1,russiaPercentage2)