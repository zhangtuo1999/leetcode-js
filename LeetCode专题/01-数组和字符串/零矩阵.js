/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-03 16:40:59
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-03 17:51:00
 * @FilePath: \leetcode-js\01-数组和字符串\零矩阵.js
 * @Description:
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = [];
  const cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (let item of rows) {
    matrix[item].fill(0);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if (cols.includes(j)) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix);
console.log(matrix);
