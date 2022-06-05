/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 19:52:57
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 20:11:27
 * @FilePath: \leetcode-js\代码随想录\01-数组\2.二分查找\0035.搜索插入位置v2.js
 * @Description:
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法第一种
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return right + 1;
};

const nums1 = [1, 3, 5, 6];
const target1 = 0;
console.log(searchInsert(nums1, target1));
