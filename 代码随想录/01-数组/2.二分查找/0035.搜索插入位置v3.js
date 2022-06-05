/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法第二种
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return right;
};

const nums1 = [1, 3, 5, 6];
const target1 = 7;
console.log(searchInsert(nums1, target1));
