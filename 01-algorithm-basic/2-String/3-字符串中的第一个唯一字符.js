/* 给定一个字符串， 找到它的第一个不重复的字符， 并返回它的索引。 如果不存在， 则返回 - 1。



示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2


提示： 你可以假定该字符串只包含小写字母。
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};
var firstUniqChar = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
      return i
  }
  return -1
};
console.log(firstUniqChar("aadadaad"));
