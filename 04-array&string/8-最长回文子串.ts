/*
 * @Author: Quinn
 * @Date: 2021-04-08 11:10:03
 * @LastEditTime: 2021-04-08 21:25:51
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



function longestPalindrome1 (str: string): string {
    let n: number = str.length;
    let dp: boolean[][] = [];
    for (let i = 0; i < n; i++) {
        dp[i] = []
    }
    let res = '';
    for (let l = 0; l < n; l++) {
        for (let i = 0; i + l < n; i++) {
            let j = i + 1;
            if (l == 0) {
                dp[i][j] = true;
            }
        }
    }
    console.log(dp);
    return res;
};
function longestPalindrome (s: string): string {
    const n = s.length
    const dp: boolean[][] = [];
    //先创建一个二维数组
    for (let i = 0; i < n; i++) {
        dp[i] = []
    }
    let ans = ''
    //l作为字符串的长度
    for (let l = 0; l < n; l++) {
        //注意 i才是起始位置 不能用l来作为起始位置遍历
        for (let i = 0; i + l < n; i++) {
            let j = i + l
            if (l === 0) {
                dp[i][j] = true
            } else if (l === 1) {
                dp[i][j] = s[i] === s[j]
            } else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
            }
            //每当有回文字符串的时候跟ans比较，得出长度更大的回文串
            // j+1是因为substring的方法
            if (dp[i][j] && s.substring(i, j + 1).length > ans.length) {
                ans = s.substring(i, j + 1)
            }
        }
    }
    return ans
};
longestPalindrome('abcdefgh')