"use strict";

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let totalNegs = 0;
  let totalPos = 0;
  let totalZero = 0;
  for (let num of arr) {
    if (num < 0) {
      totalNegs++;
    } else if (num > 0) {
      totalPos++;
    } else {
      totalZero++;
    }
  }
  console.log(Number.parseFloat(totalPos / arr.length).toFixed(6));
  console.log(Number.parseFloat(totalNegs / arr.length).toFixed(6));
  console.log(Number.parseFloat(totalZero / arr.length).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  plusMinus(arr);
}
