/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

// My solution
// *********************

// const textarea = document.querySelector("textarea");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   const input = textarea.value;
//   const inpArr = input.split("\n");
//   let tick = 0;
//   for (const text of inpArr) {
//     const textSplit = text.split("_");
//     // console.log("split:", textSplit);
//     tick++

//     const first = textSplit[0].trim().toLowerCase()
//     const second = textSplit[1][0].toUpperCase() + textSplit[1].slice(1).toLowerCase()

//     const camelCase = first + second ;
//     // const camelCase = textSplit[0].toLowerCase()

//     let ticks = '✅'
//     for (let i=1; i<tick; i++){
//       console.log(ticks)
//     }
//     console.log(camelCase)
//   }

//   // console.log(input);
//   // console.log(inpArr)

//   textarea.value = "";
// });

// textarea.addEventListener("click", function () {
//   console.log("clicked text area");
// });

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i,row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20,' ')}${'✅'.repeat(i+1)}`);
  }
});
