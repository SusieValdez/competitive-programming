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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function convertToBinary(n) {
  return n.toString(2);
}

function flippingBits(n) {
  const binary = convertToBinary(n).padStart(32, "0");
  const binaryArr = binary.split("");
  const invertedArr = [];
  for (let i of binaryArr) {
    const invertedDigit = i === "0" ? 1 : 0;
    invertedArr.push(invertedDigit);
  }
  return parseInt(invertedArr.join(""), 2);
}

// function flippingBits(n) {
//     return ~n >>> 0
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const q = parseInt(readLine().trim(), 10);
  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);
    const result = flippingBits(n);
    ws.write(result + "\n");
  }
  ws.end();
}
