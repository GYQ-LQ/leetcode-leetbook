/*
 * @Author: Quinn
 * @Date: 2021-04-10 23:21:06
 * @LastEditTime: 2021-04-10 23:26:11
 * @LastEditors: quinn
 * @Description:  
 */

function reverseWords (s: string): string {
    return s.split(' ').filter(e => e != '').reverse().join(' ')
};

["the sky is blue", "  hello world!  ", "a good   example", "  Bob    Loves  Alice   ", "Alice does not even like bob"].map(e => {
    reverseWords(e)
})