/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let i = s.length,
    res = '';
  while (i--) {
    if (s[i] === '#') {
      let num = s.substring(s.length - 3, s.length - 1) - 0;
      res = String.fromCharCode(96 + num) + res
      s = s.substring(0, s.length - 3)
      i -= 2;
    } else {
      let num = s.substring(s.length - 1) - 0;
      res = String.fromCharCode(96 + num) + res
      s = s.substring(0, s.length - 1)
    }
  }
  return res
};

freqAlphabets("10#11#12")
