/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  backTracking(res, [], 1, n, k);
  return res;
};

function backTracking(res, temp, start, n, k) {
  if (temp.length === k) {
    res.push([...temp]);
    return;
  }

  for (let i = start; i <= n; i++) {
    temp.push(i);
    backTracking(res, temp, i + 1, n, k);
    temp.pop();
  }
}

// @lc code=end
