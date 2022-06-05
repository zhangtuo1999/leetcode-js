/*
 * @Author: ZhangTuo 13120409722@163.com
 * @Date: 2022-06-05 20:37:37
 * @LastEditors: ZhangTuo 13120409722@163.com
 * @LastEditTime: 2022-06-05 21:09:45
 * @FilePath: \leetcode-js\每日一题\2022.6\0478.在圆内随机生成点.js
 * @Description:
 */

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x_center = x_center;
  this.y_center = y_center;
};

// /**
//  * @return {number[]}
//  * 错解，越靠近圆心的圆上点越密集
//  */
// Solution.prototype.randPoint = function () {
//   const randomRadius = Math.random() * this.radius;
//   const randomAlpha = Math.PI * Math.random() * 2;
//   return [
//     this.x_center + randomRadius * Math.sin(randomAlpha),
//     this.y_center + randomRadius * Math.cos(randomAlpha),
//   ];
// };

/**
 * 正解，拒绝采样
 * @returns
 */
Solution.prototype.randPoint = function () {
  while (true) {
    const x = Math.random() * (2 * this.radius) - this.radius;
    const y = Math.random() * (2 * this.radius) - this.radius;
    if (x * x + y * y <= this.radius * this.radius) {
      return [this.x_center + x, this.y_center + y];
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
