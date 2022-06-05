/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-03 19:36:25
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-03 21:25:12
 * @FilePath: \leetcode-js\01-数组和字符串\对角线遍历.js
 * @Description:
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const res = [];
  const m = mat.length - 1;
  const n = mat[0].length - 1;
  let x = 0;
  let y = 0;
  for (let i = 0; i <= m + n; i++) {
    if (i % 2 === 0) {
      for (let j = x; j >= i - y; j--) {
        res.push(mat[j][i - j]);
      }
    } else {
      for (let j = y; j >= i - x; j--) {
        res.push(mat[i - j][j]);
      }
    }
    x = x >= m ? m : x + 1;
    y = y >= n ? n : y + 1;
  }
  return res;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findDiagonalOrder(mat));
