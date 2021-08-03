/* 
1. Search a b c in 3 dimensional space. (triple for loop a, b, c variables)
    Inside the most central for loop, does a^2 + b^2 === c^2 && a+b+c === 1000.
2. when found print product a*b*c
*/

var a, b, c;
loop: for (a = 1; a <= 1000; a++) {
  for (b = 1; b <= 1000; b++) {
    for (c = 1; c <= 1000; c++) {
      if (
        Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
        a + b + c === 1000
      ) {
        break loop;
      }
    }
  }
}
console.log(a * b * c);
