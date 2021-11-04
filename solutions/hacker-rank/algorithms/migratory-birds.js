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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countBirds(birds) {
  const birdCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  for (let birdId of birds) {
    birdCounts[birdId]++;
  }
  return birdCounts;
}

function migratoryBirds(arr) {
  const birdCounts = countBirds(arr);
  let maxCount = 0;
  let mostCommonId = 0;
  for (let birdId = 1; birdId <= 5; birdId++) {
    if (birdCounts[birdId] > maxCount) {
      mostCommonId = birdId;
      maxCount = birdCounts[birdId];
    }
  }
  return mostCommonId;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const arrCount = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  const result = migratoryBirds(arr);
  ws.write(result + "\n");
  ws.end();
}
