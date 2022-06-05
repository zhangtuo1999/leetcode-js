/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 17:38:08
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 17:50:04
 * @FilePath: \leetcode-js\代码随想录\01-数组\2.二分查找\0704.二分查找.js
 * @Description:
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 第一种二分查找写法，while(left<=right){}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;

console.log(search(nums1, target1));

const nums2 = [-1, 0, 3, 5, 9, 12];
const target2 = 2;

console.log(search(nums2, target2));


