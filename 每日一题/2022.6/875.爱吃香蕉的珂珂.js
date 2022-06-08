/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 二分法
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  while (low < high) {
    const k = low + Math.floor((high - low) >> 1);
    const time = getK(piles, k);
    if (time <= h) {
      high = k ;
    } else if (time > h) {
      low = k + 1;
    } else {
      return k;
    }
  }
  return high;
};

function getK(piles, k) {
  let time = 0;
  piles.forEach((item) => {
    time += Math.ceil(item / k);
  });
  return time;
}

console.log(minEatingSpeed([3,6,7,11],8));
console.log(minEatingSpeed([30,11,23,4,20],5));
console.log(minEatingSpeed([30,11,23,4,20],6));
console.log(minEatingSpeed([312884470], 312884469));
