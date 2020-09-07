/*
 * @Author: Quinn
 * @Date: 2020-09-07 09:28:09
 * @LastEditTime: 2020-09-07 09:34:01
 * @LastEditors: quinn
 * @Description:
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  }
  let arr = [...new Set(nums)];
  arr.sort((a, b) => {
    return map.get(b) - map.get(a);
  });
  return arr.slice(0, k);
};
console.log(topKFrequent([], 1));
