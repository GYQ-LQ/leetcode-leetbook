/*
 * @Author: Quinn
 * @Date: 2021-04-08 11:10:03
 * @LastEditTime: 2021-04-08 13:00:19
 * @LastEditors: quinn
 * @Description:
 */
/* 给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"

提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
 */
function longestPalindrome(str) {
    var n = str.length;
    var dp = new Array(n).fill(new Array(n));
    for (var l = 0; l < str.length; l++) {
        for (var i = 0; i + l < str.length; i++) {
            var j = i + 1;
            if (l == 0) {
                dp[i][j] = true;
            }
        }
    }
    console.log(dp);
    return '';
}
;
longestPalindrome('abcdefgh');
