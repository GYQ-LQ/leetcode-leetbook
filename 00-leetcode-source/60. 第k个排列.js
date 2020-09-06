/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let list = []
  for (let i = 0; i < n; i++) {
    list.push(i + 1 + '')
  }
  return getNum(list, k)
};


var getNum = function (list, k) {
  let len = list.length;
  if (len === 1) return list[0]
  if (len === 2) return k === 1 ? list[0] + list[1] : list[1] + list[0]
  let l = totalNum(len - 1),
    ind = k % l === 0 ? k / l - 1 : parseInt(k / l);
  k = k % l;
  let s = list.splice(ind, 1);
  return s[0] + getNum(list, k)
}

var totalNum = function (n) {
  let res = 1
  for (let i = 1; i <= n; i++) {
    res *= i
  }
  return res
}
getPermutation(4, 9)
