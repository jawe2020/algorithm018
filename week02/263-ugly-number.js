/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  const divs = [2, 3, 5];
  for (let i = 0; i < divs.length && num > 1; i++) {
    while (num % divs[i] === 0) {
      num /= divs[i];
    }
  }
  return num === 1;
};
// @lc code=end
