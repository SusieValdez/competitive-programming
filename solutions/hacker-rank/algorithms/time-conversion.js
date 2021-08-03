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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function convertToMilitaryHour(hour, timeOfDay) {
  if (hour === 12) {
    if (timeOfDay === "AM") {
      return "00";
    } else {
      return hour;
    }
  } else {
    if (timeOfDay === "AM") {
      return hour;
    } else {
      return hour + 12;
    }
  }
}

function timeConversion(s) {
  // Write your code here
  const arr = s.split(":");
  const hour = parseInt(arr[0]);
  const minute = parseInt(arr[1]);
  const seconds = parseInt(arr[2].slice(0, 2));
  const timeOfDay = arr[2].slice(2);
  const militaryHour = convertToMilitaryHour(hour, timeOfDay);

  const militaryHourStr = String(militaryHour).padStart(2, "0");
  const minuteStr = String(minute).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");
  return `${militaryHourStr}:${minuteStr}:${secondsStr}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();
  const result = timeConversion(s);
  ws.write(result + "\n");
  ws.end();
}
