// 1
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// 2
const populations = [1380, 1440, 132, 148];
const percentages = [];
const percentageOfWorld = function (population) {
  return population / 79;
};

for (let i = 0; i < populations.length; i++) {
  percentages[i] = percentageOfWorld(populations[i]);
}
console.log(percentages);

// 3
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for(let i = 0 ; i<listOfNeighbours.length; i++){
  for(let j = 0; j<listOfNeighbours[i].length; j++){
    console.log(`Neighbours: ${listOfNeighbours[i][j]}`)
  }
}

for(let i = listOfNeighbours.length-1 ; i>=0; i--){
  for(let j = listOfNeighbours[i].length-1; j>=0; j--){
    console.log(`Backward Neighbours: ${listOfNeighbours[i][j]}`)
  }
}

// 4

const percentageWhile=[]
let k=0;
while(k<populations.length){
  percentageWhile.push(percentageOfWorld(populations[k]));
  k++
}
console.log('while-loop: ',percentageWhile)