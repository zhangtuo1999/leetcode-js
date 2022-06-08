/**
 * @param {number[][]} points
 * @return {boolean}
 * 浮点值不能比大小
 *
 */
var isBoomerang = function (points) {
  const v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]];
  const v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]];
  return v1[0] * v2[1] - v1[1] * v2[0] != 0;
};

console.log(
  isBoomerang([
    [0, 0],
    [2, 1],
    [2, 1],
  ])
);
