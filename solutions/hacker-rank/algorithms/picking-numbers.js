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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(array) {
  const orderedArr = array.sort(function (a, b) {
    return a - b;
  });
  let currentCount = 1;
  let maxCount = 1;
  let compareNum = orderedArr[0];
  for (let i = 1; i < orderedArr.length; i++) {
    const currentNum = orderedArr[i];
    if (currentNum - compareNum <= 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 1;
      compareNum = currentNum;
    }
  }
  return maxCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine().trim(), 10);
  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));
  const result = pickingNumbers(a);
  ws.write(result + "\n");
  ws.end();
}
