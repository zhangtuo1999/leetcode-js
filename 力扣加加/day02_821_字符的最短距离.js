/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === c) {
        result[i] = Math.abs(i - j);
        break;
      }
    }
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[j] === c && Math.abs(i - j) < result[i]) {
        result[i] = Math.abs(i - j);
      }
    }
  }
  return result;
};

let s = "loveleetcode",
  c = "e";
console.log(shortestToChar(s, c));
