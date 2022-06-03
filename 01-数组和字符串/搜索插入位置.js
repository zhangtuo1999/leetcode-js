/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-02 23:27:13
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-02 23:30:43
 * @FilePath: \leetcode-js\01-数组和字符串\搜索插入位置.js
 * @Description:
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
