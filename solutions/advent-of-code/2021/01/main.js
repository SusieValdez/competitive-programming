/*The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.
To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)

In this example, there are 7 measurements that are larger than the previous measurement.
How many measurements are larger than the previous measurement?*/

import fs from "fs";

function readInput() {
  try {
    return fs.readFileSync("./input.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function getLines(text) {
  return text.split("\r\n");
}

function strsToNums(stringArray) {
  return stringArray.map((x) => parseInt(x));
}

function part1() {
  const arrayOfNums = strsToNums(getLines(readInput()));
  let counter = 0;
  let prevNum;

  for (let i = 0; i <= arrayOfNums.length; i++) {
    const value = arrayOfNums[i];

    if (prevNum !== undefined && value > prevNum) {
      counter++;
    }
    prevNum = value;
  }
  console.log(counter);
}

function part2() {
  const arrayOfNums = strsToNums(getLines(readInput()));
  let counter = 0;
  let prevNum;

  for (let i = 0; i <= arrayOfNums.length - 2; i++) {
    const value = arrayOfNums[i] + arrayOfNums[i + 1] + arrayOfNums[i + 2];

    if (prevNum !== undefined && value > prevNum) {
      counter++;
    }
    prevNum = value;
  }
  console.log(counter);
}

part1();
part2();
