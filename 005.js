import { isMultipleOf } from "./common.js";

function isDivisibleByAll(n, start, end) {
  for (var i = start; i <= end; i++) {
    if (!isMultipleOf(n, i)) {
      return false;
    }
  }
  return true;
}

var min = 1;
while (true) {
  if (isDivisibleByAll(min, 1, 10)) {
    break;
  }
  min++;
}
console.log(min);
