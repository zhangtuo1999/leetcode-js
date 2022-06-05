/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 17:51:06
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 19:55:31
 * @FilePath: \leetcode-js\代码随想录\01-数组\2.二分查找\0704.二分查找v2.js
 * @Description:
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 第二种二分写法，while(left<right){}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length; // 不包括右区间，所以这里不能-1
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
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
