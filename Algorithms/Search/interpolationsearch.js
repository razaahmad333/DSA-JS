// it is advanced version of binary search
// we just rename the m ( middle) variable to pos and calculate it with different formula for better performance of algorithms

let arr = [11, 12, 13, 24, 35, 36, 47, 58];
function searchTheElementIteration(elem, arro) {
  let pos;
  let left = 0;
  let right = arro.length - 1;

  let cnt = 0;
  while (true && cnt < 20) {
    cnt++;
    pos =
      left +
      Math.floor(
        ((elem - arro[left]) * (right - left)) / (arro[right] - arro[left])
      );
    if (arro[pos] > elem) {
      right = pos;
    } else if (arro[pos] < elem) {
      left = pos;
    } else {
      console.log(cnt);
      return pos + 1;
    }
  }
}

function searchTheElementRecursion(elem, arro, left, right) {
  let pos = Math.floor((left + right) / 2);
  if (arro[pos] > elem) return searchTheElementRecursion(elem, arro, left, pos);
  if (arro[pos] < elem)
    return searchTheElementRecursion(elem, arro, pos, right);
  else return pos + 1;
}

console.log(searchTheElementIteration(47, arr));
