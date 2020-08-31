/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let ind = s.length;
  while (ind) {
    let str = s.substring(0, ind)
    if (checkStr(str)) {
      return s.substring(ind).split('').reverse().join('') + s
    }
    ind--
  }
  return s;
};

var checkStr = function (s) {
  return s === (s.split('').reverse().join(''));
}


const shortestPalindrome = (s) => {
  const rev_s = s.split('').reverse().join('');
  const str = s + "#" + rev_s;
  const next = new Array(str.length).fill(0);
  // 抽出来，方便学习记忆，是固定的模板代码
  const kmp = (next, str) => {
    next[0] = 0;
    let len = 0;
    let i = 1;
    while (i < str.length) {
      if (str[i] == str[len]) {
        len++;
        next[i] = len;
        i++;
      } else {
        if (len == 0) {
          next[i] = 0;
          i++;
        } else {
          len = next[len - 1];
        }
      }
    }
  };
  kmp(next, str);
  const maxLen = next[str.length - 1]; // 最长回文前缀的长度
  const add = s.substring(maxLen).split('').reverse().join('');
  return add + s;
};
