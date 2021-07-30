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
  // Write your code here
  let num_pos = 0;
  let num_neg = 0;
  let num_zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      num_pos++;
    } else if (arr[i] < 0) {
      num_neg++;
    } else {
      num_zero++;
    }
  }
  console.log((num_pos / arr.length).toFixed(6));
  console.log((num_neg / arr.length).toFixed(6));
  console.log((num_zero / arr.length).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  plusMinus(arr);
}
