/*
 * @Author: Quinn
 * @Date: 2020-08-26 21:03:39
 * @LastEditTime: 2021-04-07 12:41:34
 * @LastEditors: quinn
 * @Description:  
 */
function searchInsert (nums: number[], target: number): number {
    for (var i = 0; i < nums.length; i++) {
        const e = nums[i];
        if (target <= e)
            return i
    }
    return i
};