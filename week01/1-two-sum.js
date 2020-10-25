/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // a = target - b
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const potentialMatch = target - nums[i];
    if (potentialMatch in map) {
      return [map[potentialMatch], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
// @lc code=end
