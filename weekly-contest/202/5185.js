/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let len = 0;
  if (arr.length < 3)
    return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0)
      len = 0
    else {
      len++;
      if (len === 3)
        return true
    }
  }
  return len === 3
};

let a = threeConsecutiveOdds([])
console.log(a);
