/* 统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  let signs = new Uint8Array(n);

  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++;

      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }
  return count;
};


countPrimes(2)
