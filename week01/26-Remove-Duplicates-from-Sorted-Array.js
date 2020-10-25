/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  nums.forEach((n) => {
    if (n !== nums[i]) {
      nums[++i] = n;
    }
  });
  return nums.length && i + 1;
};
