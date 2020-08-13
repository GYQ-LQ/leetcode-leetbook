/* 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};
var isAnagram1 = function (s, t) {
  if (s.length != t.length) return false
  let arr = new Array(26).fill(0)
  for (const i in s) {
    arr[s[i].charCodeAt(0) - 97]++
    arr[t[i].charCodeAt(0) - 97]--
  }
  for (const val of arr) {
    if (val !== 0)
      return false
  }
  return true
};
var isAnagram2 = function (s, t) {
  let map = new Map()
  for (const v of s) {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1)
  }
  for (const v of t) {
    map.set(v, map.has(v) ? map.get(v) - 1 : 1)
  }
  for (const v of map.values()) {
    if (v !== 0)
      return false
  }
  return true
};

console.log(isAnagram2('anagram', 'nagaram'));
