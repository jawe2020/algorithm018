/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const lastK = nums.splice(nums.length - k);
  for (let i = 0; i < lastK.length; i++) {
    nums.splice(i, 0, lastK[i]);
  }
};
// @lc code=end
