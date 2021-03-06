/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[total]) {
      total++;
    }
    if (total === g.length) {
      return total;
    }
  }
  return total;
};
// @lc code=end
