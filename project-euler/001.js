import { isMultipleOf } from "./common.js";

var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (isMultipleOf(i, 3) || isMultipleOf(i, 5)) {
    sum += i;
  }
}

console.log(sum);

/* 
0  1  2  3  4  5  6  7  8  9  
0  -  -  3  -  5  6  -  -  9
23
*/
