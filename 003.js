import { isPrimeFactorOf } from "./common.js";

var n = 600851475143;
var max = 0;
for (var i = 2; i <= Math.sqrt(n); i++) {
  if (isPrimeFactorOf(i, n)) {
    max = i;
  }
}

// var n = 600851475143;
// var max = Math.floor(Math.sqrt(n));
// while (!isPrimeFactorOf(max, n)) {
//   max--;
// }
console.log(max);
