/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  // const ans = [];
  // traverse(root, ans);
  // return ans;

  const stack = [];
  const ans = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      ans.push(root.val);
      root = root.right;
    }
  }
  return ans;
};

// function traverse(root, ans) {
//   if (!root) return;

//   traverse(root.left, ans);
//   ans.push(root.val);
//   traverse(root.right, ans);
// }

// @lc code=end
