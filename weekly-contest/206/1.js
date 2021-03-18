/*
 * @Author: Quinn
 * @Date: 2020-09-13 10:31:59
 * @LastEditTime: 2020-09-13 10:46:50
 * @LastEditors: quinn
 * @Description:  
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let res = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const e = mat[i][j];
      if (e === 1 && check(mat, i, j)) {
        res++
      }
    }
  }
  return res;
};
var check = function (mat, myi, myj) {
  for (let i = 0; i < mat.length; i++) {
    const e = mat[i][myj];
    if (i !== myi && e === 1)
      return false
  }
  for (let j = 0; j < mat[myi].length; j++) {
    const e = mat[myi][j];
    if (j !== myj && e === 1)
      return false
  }
  return true
}

console.log(numSpecial([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]));