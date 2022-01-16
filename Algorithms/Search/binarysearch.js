let arr = [11, 12, 13, 24, 35, 36, 47, 58];

function searchTheElementIteration(elem, arro) {
  let m = Math.floor(arro.length / 2);
  let left = 0;
  let right = arro.length - 1;

  let cnt = 0;
  while (true && cnt < 20) {
    cnt++;
    m = Math.floor((left + right) / 2);
    if (arro[m] > elem) {
      right = m;
    } else if (arro[m] < elem) {
      left = m;
    } else {
      console.log(cnt);
      return m + 1;
    }
  }
}

function searchTheElementRecursion(elem, arro, left, right) {
  let m = Math.floor((left + right) / 2);
  if (arro[m] > elem) return searchTheElementRecursion(elem, arro, left, m);
  if (arro[m] < elem) return searchTheElementRecursion(elem, arro, m, right);
  else return m + 1;
}

console.log(searchTheElementIteration(47, arr, 0, arr.length - 1));
