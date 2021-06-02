export function isMultipleOf(x, n) {
  return x % n === 0;
  // if (x % n === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

export function isFactorOf(x, n) {
  return isMultipleOf(n, x);
}

export function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (isFactorOf(i, n)) {
      return false;
    }
  }
  return true;
}

export function isPrimeFactorOf(x, n) {
  return isFactorOf(x, n) && isPrime(x);
}

export function multiplyDigits(digits) {
  var product = 1;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    product *= digit;
  }
  return product;
}

export function sumDigits(digits) {
  var sum = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    sum += digit;
  }
  return sum;
}
