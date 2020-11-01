/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  BFS(root, 0, res);
  return res;
};

function BFS(root, depth, ans) {
  if (!root) return;

  if (depth === ans.length) {
    ans.push([]);
  }
  ans[depth].push(root.val);
  for (let c of root.children) {
    BFS(c, depth + 1, ans);
  }
}

// @lc code=end
