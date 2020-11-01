/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // const ans = [];
  // traverse(root, ans);
  // return ans;

  // iteration
  const queue = [root];
  const ans = [];

  while (queue.length > 0) {
    const cur = queue.shift();

    if (!cur) continue;

    ans.push(cur.val);
    queue.unshift(...cur.children);
  }
  return ans;
};

// function traverse(root, ans) {
//   if (!root) return;
//   ans.push(root.val);
//   for (let c of root.children) {
//     traverse(c, ans);
//   }
// }

// @lc code=end
