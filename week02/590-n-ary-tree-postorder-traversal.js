/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorder = function (root) {
  //   const ans = [];
  //   traverse(root, ans);
  //   return ans;
  const ans = [];
  const stack = [root];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (!cur) continue;
    stack.push(...cur.children);
    ans.unshift(cur.val);
  }
  return ans;
};

// function traverse(root, ans) {
//   if (!root) return;
//   for (let child of root.children) {
//     traverse(child, ans);
//   }
//   ans.push(root.val);
// }
// @lc code=end
