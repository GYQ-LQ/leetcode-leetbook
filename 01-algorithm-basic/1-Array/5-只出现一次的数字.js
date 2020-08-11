/* 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
  */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或
var singleNumber2 = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
// 哈希
var singleNumber1 = function (nums) {
  let obj = {};
  nums.map((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};
// indexOf
var singleNumber = function (nums) {
  let len = nums.length;
  while (len--) {
    if (nums.indexOf(nums[len]) === nums.lastIndexOf(nums[len]))
      return nums[len];
  }
};

let a = singleNumber2([4, 1, 2, 1, 2]);
console.log(a);
