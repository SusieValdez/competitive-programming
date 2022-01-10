"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function distance(int1, int2) {
  return Math.abs(int2 - int1);
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const catAToZ = distance(x, z);
  const catBToZ = distance(y, z);
  if (catAToZ > catBToZ) {
    return "Cat B";
  } else if (catAToZ < catBToZ) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const q = parseInt(readLine(), 10);
  for (let qItr = 0; qItr < q; qItr++) {
    const xyz = readLine().split(" ");
    const x = parseInt(xyz[0], 10);
    const y = parseInt(xyz[1], 10);
    const z = parseInt(xyz[2], 10);
    let result = catAndMouse(x, y, z);
    ws.write(result + "\n");
  }
  ws.end();
}
