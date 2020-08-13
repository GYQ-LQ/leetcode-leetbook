/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let res = '0';
  if (num1 === '0' || num2 === '0') return res;
  for (let i = num1.length - 1, countzero = 0; i >= 0; i--, countzero++) {
    const n1 = num1[i];
    let num = 0,
      str = '',
      count = countzero;
    for (let j = num2.length - 1; j >= 0; j--) {
      const n2 = num2[j];
      let t = n1 * n2 + num;
      str = (t % 10) + str;
      num = parseInt(t / 10);
    }
    if (num > 0) str = num + str;
    while (count) {
      str += '0';
      count--;
    }
    res = sumStr(res, str);
  }
  return res;
};
var sumStr = function (s1, s2) {
  let len1 = s1.length - 1,
    len2 = s2.length - 1;
  let n = 0,
    res = '';
  while (len1 >= 0 || len2 >= 0) {
    let t = n;
    if (len1 >= 0) {
      t = t + (s1[len1] - 0);
      len1--;
    }
    if (len2 >= 0) {
      t = t + (s2[len2] - 0);
      len2--;
    }
    res = (t % 10) + res;
    n = parseInt(t / 10);
  }
  if (n === 1) res = '1' + res;
  return res;
};

var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    const result = x + y + add;
    ans.push(result % 10);
    add = Math.floor(result / 10);
    i -= 1;
    j -= 1;
  }
  return ans.reverse().join('');
};
var addStrings1 = function (num1, num2) {
  let m = num1.length,
    n = num2.length;
  let t = 0,
    res = '';
  while (m || n) {
    if (m) {
      t += num1[m - 1] - 0;
      m--;
    }
    if (n) {
      t += num2[n - 1] - 0;
      n--;
    }
    res = (t % 10) + res;
    t = parseInt(t / 10);
  }
  res = t > 0 ? t + res : res;
  return res;
};
// 0,0 0,1 1,0 12,456 789,3
console.log(multiply('123', '456'));

// console.log(sumStr('9999', '1'));
