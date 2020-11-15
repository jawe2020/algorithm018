/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (len === 0) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;

  let left = 0,
    right = len - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[len - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
