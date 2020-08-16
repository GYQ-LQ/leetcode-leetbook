/**
 * @param {number} n
 * @return {number}
 */
var minDays1 = function (n) {
  let arr = [0, 1, 2, 2];
  if (n < 4)
    return arr[n];
  for (let i = 4; i <= n; i++) {
    let val = 1 + arr[i - 1];
    if (i % 2 === 0)
      val = Math.min(val, 1 + arr[i / 2]);
    if (i % 3 === 0)
      val = Math.min(val, 1 + arr[i / 3]);
    console.log(i, val);
    arr[i] = val
  }
  return arr[n]
};
var minDays = function (num) {
  let map = new Map();
  let mapNum = function (n) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (map.has(n)) return map.get(n)
    let res = Math.min(mapNum(parseInt(n / 2)) + n % 2 + 1, mapNum(parseInt(n / 3)) + n % 3 + 1)
    map.set(n, res)
    return res;
  }
  return mapNum(num)
};
console.log(minDays(23432432432));
