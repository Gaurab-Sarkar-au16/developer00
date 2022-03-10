const percentageOfWorld = (populations) => populations / 79;
const populations = [1380, 1441, 138, 140];

populations.length === 4 ? console.log(true) : console.log(false);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages)