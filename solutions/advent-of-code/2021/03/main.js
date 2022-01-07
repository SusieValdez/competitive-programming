import fs from "fs";

function readInput() {
  try {
    return fs.readFileSync("./input.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function getLines(text) {
  return text.split("\r\n");
}

function getColumn(matrix, index) {
  const column = [];
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][index]);
  }
  return column;
}

function countElems(array) {
  const counter = {};
  for (const elem of array) {
    if (counter[elem]) {
      counter[elem]++;
    } else {
      counter[elem] = 1;
    }
  }
  return counter;
}

function getMostCommonElem(array) {
  const counts = countElems(array);
  let mostCommonElem;
  let maxCount = 0;
  for (const elem in counts) {
    const count = counts[elem];
    if (count > maxCount) {
      maxCount = count;
      mostCommonElem = elem;
    }
  }
  return mostCommonElem;
}

const text = readInput();
const lines = getLines(text); // array of strings ["00001", "10101", "11001"]

// part 1
// const width = lines[0].length;
// let mostCommonBitsStr = "";
// let leastCommonBitsStr = "";
// for (let i = 0; i < width; i++) {
//   const column = getColumn(lines, i);
//   const mostCommonBit = getMostCommonElem(column);

//   let leastCommonBit;
//   if (mostCommonBit === "0") {
//     leastCommonBit = "1";
//   } else {
//     leastCommonBit = "0";
//   }

//   mostCommonBitsStr += mostCommonBit;
//   leastCommonBitsStr += leastCommonBit;
// }
// const mostCommonBits = parseInt(mostCommonBitsStr, 2);
// const leastCommonBits = parseInt(leastCommonBitsStr, 2);
// console.log(mostCommonBits * leastCommonBits);

// part 2
const width = lines[0].length;
let mostCommonLines = "";
for (let i = 0; i < width; i++) {
  if (i === 12) {
    mostCommonBit === 1;
  }
  const column = getColumn(lines, i);
  const mostCommonBit = getMostCommonElem(column);
  mostCommonLines += lines.startsWith(mostCommonBit);
}

const mostCommonBits = parseInt(mostCommonBitsStr, 2);
console.log(mostCommonBits * leastCommonBits);
