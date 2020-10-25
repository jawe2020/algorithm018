/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    if (leftMax > height[left]) {
      ans += leftMax - height[left];
    }
    rightMax = Math.max(height[right], rightMax);
    if (rightMax > height[right]) {
      ans += rightMax - height[right];
    }
    height[left] < height[right] ? left++ : right--;
  }
  return ans;
};
// @lc code=end
