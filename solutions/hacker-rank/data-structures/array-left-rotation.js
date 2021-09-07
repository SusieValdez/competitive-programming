function rotateLeft(d, arr) {
  // Write your code here
  let last;
  for (let i = d; i < arr.length; i++) {
    last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
