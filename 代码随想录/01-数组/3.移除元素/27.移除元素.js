/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 19:23:43
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 20:04:46
 * @FilePath: \leetcode-js\代码随想录\01-数组\3.移除元素\27.移除元素.js
 * @Description:
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let length = 0;
  nums.forEach((num) => {
    if (num !== val) {
      nums[length++] = num;
    }
  });
  return length;
};

const nums1 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(nums1, val1));

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
console.log(removeElement(nums2, val2));
