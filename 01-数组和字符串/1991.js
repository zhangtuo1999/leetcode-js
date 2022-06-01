/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-01 11:39:53
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-01 22:58:42
 * @FilePath: \leetcode-js\01-数组和字符串\1991.js
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((prev, cur) => prev + cur);
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curSum === (sum - nums[i]) / 2) {
      return i;
    }
    curSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
