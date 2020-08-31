/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let maxs = [],
    len = 0,
    fnum = 0,
    znum = 0,
    manus = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      znum++
      if (fnum % 2 === 1) {
        manus++
        len = Math.max(manus, len);
      } else {
        len++
      }
    } else if (num < 0) {
      fnum++
      if (fnum % 2 === 1) {
        len = len
      } else {
        len = znum + fnum
      }
    } else {
      maxs.push(len)
      znum = fnum = manus = len = 0
    }
    console.log(num, len)
  }
  maxs.push(len)
  console.log(maxs)
  return Math.max(...maxs)
};
console.log(getMaxLen([5, -20, -20, -39, -5, 0, 0, 0, 36, -32, 0, -7, -10, -7, 21, 20, -12, -34, 26, 2]))
