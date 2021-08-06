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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function sumHourglass(grid, i, j) {
  let result = 0;
  for (let x = -1; x <= 1; x++) {
    result += grid[i - 1][j + x];
  }
  for (let x = -1; x <= 1; x++) {
    result += grid[i + 1][j + x];
  }
  result += grid[i][j];
  return result;
}

function hourglassMax(grid) {
  let max = -Infinity;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      const sum = sumHourglass(grid, i, j);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  let arr = Array(6);
  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }
  const result = hourglassMax(arr);
  ws.write(result + "\n");
  ws.end();
}
