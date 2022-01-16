let arr = [11, 12, 13, 24, 35, 36, 47, 58];

function searchByExponential(elem, arro) {
  // let initial = 1;
  let final = 1;
  let cnt = 0;
  while (cnt < 20) {
    cnt++;
    console.log(cnt);
    if (final > arro.length) break;
    else if (arro[final] >= elem)
      return searchTheElementRecursion(elem, arro, final / 2, final);
    else if (arro[final] < elem) final *= 2;
  }
  return searchTheElementRecursion(elem, arro, final / 2, final);
}

function searchTheElementRecursion(elem, arro, left, right) {
  let m = Math.floor((left + right) / 2);
  if (arro[m] > elem) return searchTheElementRecursion(elem, arro, left, m);
  if (arro[m] < elem) return searchTheElementRecursion(elem, arro, m, right);
  else return m + 1;
}

console.log(searchByExponential(47, arr));
