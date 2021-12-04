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

function parseInstruction(str) {
  const direction = str.split(" ")[0];
  const value = parseInt(str.split(" ")[1]);
  return {
    direction,
    value,
  };
}

function part1(instructions) {
  let horizontalPosition = 0;
  let depth = 0;
  for (const { direction, value } of instructions) {
    switch (direction) {
      case "forward":
        horizontalPosition += value;
        break;
      case "up":
        depth -= value;
        break;
      case "down":
        depth += value;
        break;
    }
  }
  console.log(horizontalPosition * depth);
}

function part2(instructions) {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  for (const { direction, value } of instructions) {
    switch (direction) {
      case "forward":
        horizontalPosition += value;
        depth += value * aim;
        break;
      case "up":
        aim -= value;
        break;
      case "down":
        aim += value;
        break;
    }
  }
  console.log(horizontalPosition * depth);
}

const text = readInput();
const lines = getLines(text);
const instructions = lines.map(parseInstruction);

part1(instructions);
part2(instructions);
