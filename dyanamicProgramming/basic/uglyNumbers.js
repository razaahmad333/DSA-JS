function findUglyNumber(n) {
  var uglyNumbers = [1];
  var i2 = 0;
  var i3 = 0;
  var i5 = 0;
  var nextUglyNumber = 1;
  while (uglyNumbers.length < n) {
    nextUglyNumber = Math.min(
      uglyNumbers[i2] * 2,
      uglyNumbers[i3] * 3,
      uglyNumbers[i5] * 5
    );
    uglyNumbers.push(nextUglyNumber);
    if (nextUglyNumber % 2 === 0) {
      i2++;
    }
    if (nextUglyNumber % 3 === 0) {
      i3++;
    }
    if (nextUglyNumber % 5 === 0) {
      i5++;
    }
  }
  return nextUglyNumber;
}

console.log(findUglyNumber(10));
