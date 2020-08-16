/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  n -= 1;
  let res = 0;
  while (n > 0) {
    res += n;
    n -= 2;
  }
  return res;
};

console.log(minOperations(3));
