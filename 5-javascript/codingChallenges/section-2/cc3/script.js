// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

const dolphinScore1 = Number(prompt(`Enter Dolphin 1st scores!`));
const dolphinScore2 = Number(prompt(`Enter Dolphin 2nd scores!`));
const dolphinScore3 = Number(prompt(`Enter Dolphin 3rd scores!`));
const dolphinTotalScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const dolphinAvgScore = dolphinTotalScore / 3;
console.log(`Dolphins Avg Score: ${dolphinAvgScore}`)

const koalasScore1 = Number(prompt(`Enter Koalas 1st scores!`));
const koalasScore2 = Number(prompt(`Enter Koalas 2nd scores!`));
const koalasScore3 = Number(prompt(`Enter Koalas 3rd scores!`));
const koalasTotalScore = koalasScore1 + koalasScore2 + koalasScore3;
const koalasAvgScore = koalasTotalScore / 3;
console.log(`Koalas Avg Score: ${koalasAvgScore}`)

// if (dolphinAvgScore > koalasAvgScore) {
//   console.log(`Dolphins Won!`);
// } else if (dolphinAvgScore === koalasAvgScore) {
//   console.log(`It's a tie!`);
// } else {
//   console.log(`Koalas won!`);
// }

if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
  console.log(`Dolphins Won!`);
} else if (
  dolphinAvgScore === koalasAvgScore &&
  dolphinAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log(`It's a tie!`);
} else if (dolphinAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
  console.log(`Koalas won!`);
} else {
  console.log('No body won!')
}
