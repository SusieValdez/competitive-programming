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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function count(ar) {
  const counts = {};
  for (const item of ar) {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }
  return counts;
}

function sockMerchant(n, ar) {
  // Write your code here
  const counts = count(ar);
  let numPairs = 0;
  for (const numSocks of Object.values(counts)) {
    numPairs += Math.floor(numSocks / 2);
  }
  return numPairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine().trim(), 10);
  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));
  const result = sockMerchant(n, ar);
  ws.write(result + "\n");
  ws.end();
}
