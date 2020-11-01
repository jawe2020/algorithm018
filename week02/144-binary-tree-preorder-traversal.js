/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  //   const res = [];
  //   traverse(root, res);
  //   return res;
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();

    if (!cur) continue;
    result.push(cur.val);

    queue.unshift(cur.right);
    queue.unshift(cur.left);
  }
  return result;
};

// function traverse(root, path) {
//   if (!root) return;
//   path.push(root.val);
//   traverse(root.left, path);
//   traverse(root.right, path);
// }
