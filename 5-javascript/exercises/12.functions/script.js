function describeCountry(country, population, capialCity) {
  return `${country} has ${population} million people and its capital city is ${capialCity}`;
}
const countryOne = describeCountry('India', 1000, 'Delhi')
console.log(countryOne)
const countryTwo = describeCountry('China', 1380, 'Beijing')
console.log(countryTwo)
const countryThree = describeCountry('US', 100, 'Washington')
console.log(countryThree)