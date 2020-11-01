/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
var topKFrequent = function (nums, k) {
  const fmap = nums.reduce((a, c) => {
    a[c] = ~~a[c] + 1;
    return a;
  }, {});

  const res = [];

  for (let i = 0; i < k; i++) {
    let maxFreq = 0;
    let maxFreqNum;

    for (let [num, freq] of Object.entries(fmap)) {
      if (freq > maxFreq && !res.includes(num)) {
        maxFreq = freq;
        maxFreqNum = num;
      }
    }
    res.push(maxFreqNum);
  }
  return res;
};
// @lc code=end
