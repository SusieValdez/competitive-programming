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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function getCounts(array) {
  const counts = {};
  for (let num of array) {
    if (counts[num] === undefined) {
      counts[num] = 0;
    }
    counts[num]++;
  }
  return counts;
}

function lonelyinteger(a) {
  const intObject = getCounts(a);
  for (const [key, value] of Object.entries(intObject)) {
    if (value === 1) {
      return key;
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const n = parseInt(readLine().trim(), 10);
  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));
  const result = lonelyinteger(a);
  ws.write(result + "\n");
  ws.end();
}
