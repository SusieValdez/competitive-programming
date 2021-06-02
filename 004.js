function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
function isPalindromic(n) {
  var nStr = n.toString();
  return nStr === reverseString(nStr);
}

var max = 0;
for (var i = 100; i <= 999; i++) {
  for (var j = 100; j <= 999; j++) {
    var value = i * j;
    if (value > max && isPalindromic(value)) {
      max = value;
    }
  }
}
console.log(max);
