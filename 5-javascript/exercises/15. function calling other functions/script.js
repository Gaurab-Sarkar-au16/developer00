const worldPopulation = 7900

const percentageOfWorld = population => (population/worldPopulation)*100
const describePopulation = (country, population) =>{
  const percentage = percentageOfWorld(population)
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

 console.log(describePopulation('india',1380))
 console.log(describePopulation('china',1441))
 console.log(describePopulation('russia',140))