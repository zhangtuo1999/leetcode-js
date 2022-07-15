/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const num1 = num.reverse();
  const num2 = k
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reverse();
  const result = [];
  let m = 0;
  let n = 0;
  let extra = 0;
  while (m < num1.length || n < num2.length) {
    const sum =
      (m < num1.length ? num1[m++] : 0) + (n < num2.length ? num2[n++] : 0) + extra;
    extra = sum > 9 ? 1 : 0;
    result.push(sum % 10);
  }
  if (extra) {
    result.push(extra);
  }
  return result.reverse();
};

const num = [2, 1, 5],
  k = 806;
console.log(addToArrayForm(num, k));
