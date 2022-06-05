/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-03 09:15:03
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-03 10:20:34
 * @FilePath: \leetcode-js\01-数组和字符串\合并区间.js
 * @Description:
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let i = 0;
  while (i < intervals.length) {
    let left = intervals[i][0];
    let right = intervals[i][1];
    while (i < intervals.length) {
      if (i === intervals.length - 1) {
        res.push([left, right]);
        return res;
      }
      if (right >= intervals[i + 1][0]) {
        right = Math.max(right, intervals[i + 1][1]);
        i++;
      } else {
        res.push([left, right]);
        i++;
        break;
      }
    }
  }
  return intervals;
};

console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);
