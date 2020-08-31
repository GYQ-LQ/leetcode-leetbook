/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let len = arr.length
  if (m * k > len) return false;
  confor: for (let i = 0; i < arr.length; i++) {
    let str = arr.slice(i, m + i).join(''),
      num = 0,
      ind = i
    while (ind < arr.length) {
      list = arr.slice(ind, ind + m)
      if (list.join('') === str) {
        num++;
        ind = ind + m;
        if (num === k) return true
      } else {
        continue confor;
      }
    }
  }
  return false
};

let flag = containsPattern([2, 2], 2, 2)
console.log(flag)
