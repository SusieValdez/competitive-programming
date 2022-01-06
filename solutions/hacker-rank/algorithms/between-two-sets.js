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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function isFactorOf(x, y) {
  return y % x === 0;
}

function areAllFactorsOf(nums, num) {
  // return nums.every(n => isFactorOf(n, num))
  for (const n of nums) {
    if (!isFactorOf(n, num)) {
      return false;
    }
  }
  return true;
}

function isFactorOfAll(num, nums) {
  // return nums.every(n => isFactorOf(num, n))
  for (const n of nums) {
    if (!isFactorOf(num, n)) {
      return false;
    }
  }
  return true;
}

function getTotalX(a, b) {
  let count = 0;
  for (let num = 1; num <= Math.max(...b); num++) {
    if (areAllFactorsOf(a, num) && isFactorOfAll(num, b)) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
  const n = parseInt(firstMultipleInput[0], 10);
  const m = parseInt(firstMultipleInput[1], 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  const brr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((brrTemp) => parseInt(brrTemp, 10));
  const total = getTotalX(arr, brr);
  ws.write(total + "\n");
  ws.end();
}
