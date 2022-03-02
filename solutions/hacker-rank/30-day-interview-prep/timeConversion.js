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

function stringToArray(s) {
  let timeArr = [];
  const splitArr = s.split(":");
  const hour = timeArr.push(splitArr[0]);
  const minutes = timeArr.push(splitArr[1]);
  const seconds = timeArr.push(splitArr[2].slice(0, 2));
  const period = timeArr.push(splitArr[2].slice(2));
  return timeArr;
}

function conversion(s) {
  let arr = stringToArray(s);
  let hour = parseInt(arr[0]);
  if (arr[3] === "AM") {
    if (hour === 12) {
      return (hour = 0);
    }
  } else {
    if (hour < 12) {
      return hour + 12;
    } else {
      return (hour = 12);
    }
  }
  return hour;
}

function timeConversion(s) {
  let arr = stringToArray(s);
  let hour = conversion(s);
  const hourStr = hour.toString();
  return `${hourStr.padStart(2, "0")}:${arr[1]}:${arr[2]}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();
  const result = timeConversion(s);
  ws.write(result + "\n");
  ws.end();
}
