/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight / markHeight ** 2;

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2;

if(markBMI>johnBMI){
  console.log(`Mark's BMI is higher than John's!
Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}else{
  console.log(`Jhon's BMI is higher than Mark's!
Jhon's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}