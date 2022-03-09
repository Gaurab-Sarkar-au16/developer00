const worldPopulation = 7900
const percentageOfWorld3 = population => (population/worldPopulation)*100

const indiaPercentage = percentageOfWorld3(1380)
const chinaPercentage = percentageOfWorld3(1441)
const russiaPercentage = percentageOfWorld3(140)

console.log(indiaPercentage,chinaPercentage,russiaPercentage)