/* 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
  if (n === 0) return []
  if (n === 1) return [
    [1]
  ]
  if (n === 2) return [
    [1],
    [1, 1]
  ]
  let res = [
    [1],
    [1, 1]
  ]
  for (let i = 3; i < n; i++) {
    let ind = i - 1;
    res[ind] = []
    for (let j = 0; j < i; j++) {
      let num = res[ind - 1][j - 1] + res[ind - 1][j]
      res[ind].push(isNaN(num) ? 1 : num)
    }
  }
  return res
};
