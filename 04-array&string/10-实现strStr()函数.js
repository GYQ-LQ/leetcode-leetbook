/*
 * @Author: Quinn
 * @Date: 2021-04-14 16:57:14
 * @LastEditTime: 2021-04-14 16:58:10
 * @LastEditors: quinn
 * @Description:  
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") return 0;
    let next = getNext(needle);
    let hi = 0;
    let ne = 0;
    while (hi < haystack.length) {
        if (ne == -1 || haystack[hi] == needle[ne]) { //相等情况
            if (ne == needle.length - 1) return (hi - needle.length + 1);
            hi++;
            ne++;
        } else { //失配情况
            ne = next[ne];
        }
    }
    return -1;
};

function getNext(needle) { //获取next数组
    let next = [];
    next[0] = -1;
    let i = 0;
    let j = -1;
    while (i < needle.length) {
        if (j == -1 || needle[i] == needle[j]) {
            next[++i] = ++j;
        } else {
            j = next[j] //回溯
        }
    }
    return next;
}