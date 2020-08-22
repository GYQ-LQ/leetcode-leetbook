/* 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true
示例 2:

输入: 0
输出: false
示例 3:

输入: 9
输出: true
示例 4:

输入: 45
输出: false
进阶：
你能不使用循环或者递归来完成本题吗？
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false
  while (n > 1) {
    if (n % 3 === 0) {
      n = n / 3
    } else {
      return false
    }
  }
  return true
};

/* 把n 转换为3进制字符串利用正则来解决该问题 
n = 1 时 ==> 转3进制数为 1
n = 3 时 ==> 转3进制数为 10
n = 9 时 ==> 转3进制数为 100
n = 27 时 ==> 转3进制数为 1000 */
var isPowerOfThree = function (n) {
  return /^10*$/.test(n.toString(3));
};
