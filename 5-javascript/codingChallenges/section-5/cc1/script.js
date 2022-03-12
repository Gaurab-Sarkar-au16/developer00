/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/
const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];
const printForecast = function (t1, t2) {
  const temps = t1.concat(t2);

  let strings = "...";
  for (let i = 0; i < temps.length; i++) {
    strings += ` ${temps[i]}ºC in ${i + 1} days ...`;
  }

  return strings;
};

console.log(printForecast(Data1, Data2));
