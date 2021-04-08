/* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
 */
function longestCommonPrefix (strs: string[]): string {
    if (strs == null || strs.length == 0) {
        return "";
    }
    return strs.reduce((a, b) => {
        return getLongestStr(a, b)
    })
};

function getLongestStr (a: string, b: string): string {
    let i = 0,
        len = Math.min(a.length, b.length);
    while (i < len && a.charAt(i) == b.charAt(i)) {
        i++;
    }
    return a.slice(0, i);
}

longestCommonPrefix(["flower", "flow", "flight"])