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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const SEA_LEVEL_HEIGHT = 0;

function isStartOfValley(height, stepDirection) {
  const atSeaLevel = height === SEA_LEVEL_HEIGHT;
  const isSteppingDown = stepDirection === "D";
  return atSeaLevel && isSteppingDown;
}

function isEndOfValley(height, stepDirection) {
  const nextStepIsSeaLevel = height + 1 === SEA_LEVEL_HEIGHT;
  const isSteppingUp = stepDirection === "U";
  return nextStepIsSeaLevel && isSteppingUp;
}

function findValleys(path) {
  const steps = path.split("");
  let valleyCounter = 0;
  let height = SEA_LEVEL_HEIGHT;
  for (const stepDirection of steps) {
    if (isEndOfValley(height, stepDirection)) {
      valleyCounter++;
    }
    if (stepDirection === "U") {
      height++;
    } else {
      height--;
    }
  }
  return valleyCounter;
}

function countingValleys(steps, path) {
  return findValleys(path);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const steps = parseInt(readLine().trim(), 10);
  const path = readLine();
  const result = countingValleys(steps, path);
  ws.write(result + "\n");
  ws.end();
}
