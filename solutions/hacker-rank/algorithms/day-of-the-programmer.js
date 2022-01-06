"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

const TRANSITION_YEAR = 1918;
const DAY_OF_PROGRAMMER = 256;
const defaultDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getNumDaysInFeburary(year) {
  const isMultipleOf4 = year % 4 === 0;
  const isMultipleOf400 = year % 400 === 0;
  const isNotMultipleOf100 = year % 100 !== 0;
  if (year < TRANSITION_YEAR) {
    if (isMultipleOf4) {
      return 29;
    } else {
      return 28;
    }
  } else if (year === TRANSITION_YEAR) {
    return 15;
  } else {
    if (isMultipleOf400 || (isMultipleOf4 && isNotMultipleOf100)) {
      return 29;
    } else {
      return 28;
    }
  }
}

function buildSpecificDaysInMonths(year) {
  return [
    defaultDaysInMonths[0],
    getNumDaysInFeburary(year),
    ...defaultDaysInMonths.slice(2),
  ];
}

function getDayMonth(dayNum, year) {
  const daysInMonths = buildSpecificDaysInMonths(year);
  let daysSum = 0;
  for (let i = 0; i < daysInMonths.length; i++) {
    const prevDaysSum = daysSum;
    daysSum += daysInMonths[i];
    if (daysSum > dayNum) {
      return [dayNum - prevDaysSum, i];
    }
  }
}

function formatDate(day, month, year) {
  const dayStr = `${day}`.padStart(2, "0");
  const monthStr = `${month + 1}`.padStart(2, "0");
  return `${dayStr}.${monthStr}.${year}`;
}

function dayOfProgrammer(year) {
  const [day, month] = getDayMonth(DAY_OF_PROGRAMMER, year);
  return formatDate(day, month, year);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const year = parseInt(readLine().trim(), 10);
  const result = dayOfProgrammer(year);
  ws.write(result + "\n");
  ws.end();
}
