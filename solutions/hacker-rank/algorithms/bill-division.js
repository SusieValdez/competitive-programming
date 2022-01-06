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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function excludeAmountFromSum(bill, k) {
  let billSum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (k === i) {
      continue;
    } else {
      billSum += bill[i];
    }
  }
  return billSum;
}

function calculateBonAppetit(bill, k, b) {
  // Write your code here
  let subtotal = excludeAmountFromSum(bill, k); //total sum not divided by 2
  let annaTotal = subtotal / 2;
  if (b > annaTotal) {
    return b - annaTotal;
  } else if (b === annaTotal) {
    return "Bon Appetit";
  }
}

function bonAppetit(bill, k, b) {
  const result = calculateBonAppetit(bill, k, b);
  console.log(result);
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");
  const n = parseInt(firstMultipleInput[0], 10);
  const k = parseInt(firstMultipleInput[1], 10);
  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));
  const b = parseInt(readLine().trim(), 10);
  bonAppetit(bill, k, b);
}
