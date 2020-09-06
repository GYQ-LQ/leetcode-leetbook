/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let arr = s.split(''),
    Code = 96,
    f = true
  for (let i = 0; i < arr.length; i++) {
    let pre = arr[i - 1],
      cur = arr[i],
      nxt = arr[i + 1];
    if (cur === '?') Code = Code + 1 > 122 ? 97 : Code + 1
    if (pre !== undefined && pre.indexOf('0') === -1 && pre.charCodeAt(0) === Code) {
      Code = Code + 1 > 122 ? 97 : Code + 1
    }
    if (nxt !== undefined && nxt.indexOf('0') === -1 && nxt.charCodeAt(0) === Code) {
      Code = Code + 1 > 122 ? 97 : Code + 1
    }
    if (cur === '?') {
      arr[i] = String.fromCharCode(Code) + '0';
    } else {
      Code = 96;
    }
  }
  return arr.join('').split('0').join('')
};


console.log(modifyString("????????????????????????????????????????????????????????????????????"))
// console.log(modifyString("ubv?w"))
// console.log(modifyString("j?qg??b"))
// console.log(modifyString("??yw??ipkj????"))
// console.log(modifyString("?a??b???c????"))
