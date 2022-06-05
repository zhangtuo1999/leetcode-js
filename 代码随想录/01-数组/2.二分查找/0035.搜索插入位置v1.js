/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 19:41:52
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 20:03:50
 * @FilePath: \leetcode-js\代码随想录\01-数组\2.二分查找\0035. 搜索插入位置v1.js
 * @Description:
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 暴力法
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

const nums1 = [1, 3, 5, 6];
const target1 = 7;
console.log(searchInsert(nums1, target1));
