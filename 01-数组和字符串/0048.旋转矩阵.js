/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-03 10:33:34
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-03 16:38:30
 * @FilePath: \leetcode-js\01-数组和字符串\0048.旋转矩阵.js
 * @Description:
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let item of matrix) {
    item.reverse();
  }
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);
console.log(matrix);
