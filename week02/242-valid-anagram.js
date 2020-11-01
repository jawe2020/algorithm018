/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const cmap = {};
  for (let c of s) {
    if (!cmap[c]) {
      cmap[c] = 0;
    } else {
      cmap[c]++;
    }
  }

  for (let c of t) {
    if (cmap[c]) {
      cmap[c]--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
