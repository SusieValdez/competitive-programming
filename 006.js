function sumOfTheSquares(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfTheSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
}

console.log(squareOfTheSum(100) - sumOfTheSquares(100));
