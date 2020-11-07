/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  let res = [];

  let cMap = nums.reduce((a, c) => {
    a.set(c, ~~a.get(c) + 1);
    return a;
  }, new Map());

  function backtrack(nums, arr) {
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let [key, value] of cMap) {
      if (value == 0) continue;
      arr.push(key);
      cMap.set(key, --value);
      backtrack(nums, arr);
      arr.pop();
      cMap.set(key, ++value);
    }
  }
  backtrack(nums, []);
  return res;
};

// @lc code=end
