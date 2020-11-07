/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  backTracking(nums, res);
  return res;
};

function backTracking(nums, res, depth = 0, path = [], used = []) {
  if (depth === nums.length) {
    res.push([...path]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;

    path.push(nums[i]);
    used[i] = true;
    backTracking(nums, res, depth + 1, path, used);
    path.pop();
    used[i] = false;
  }
}

// @lc code=end
