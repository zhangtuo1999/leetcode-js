/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const raw = Array.from(heights);
  heights.sort((a, b) => a - b);
  let count = 0;
  heights.forEach((value, i) => {
    if (value !== raw[i]) count++;
  });
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
