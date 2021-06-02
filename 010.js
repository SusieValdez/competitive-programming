import { isPrime } from "./common.js";

var sumOfPrimes = 0;
for (let i = 0; i < 2000000; i++) {
  if (isPrime(i)) {
    sumOfPrimes += i;
  }
}

console.log(sumOfPrimes);
