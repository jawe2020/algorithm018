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
  const nmap = {};
  for (let i = 0; i < nums.length; i++) {
    const pm = target - nums[i];
    if (pm in nmap) {
      return [nmap[pm], i];
    } else {
      nmap[nums[i]] = i;
    }
  }
  return [];
};
// @lc code=end
