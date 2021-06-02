import { isPrime } from "./common.js";

function nthPrime(n) {
  var x = 0;
  var numPrimes = 0;
  while (true) {
    if (isPrime(x)) {
      numPrimes++;
    }
    if (numPrimes === n) {
      return x;
    }
    x++;
  }
}
console.log(nthPrime(10001));
