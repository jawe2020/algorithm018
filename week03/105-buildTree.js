/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //   const hash = {};
  //   inorder.forEach((e, i) => {
  //     hash[e] = i;
  //   });

  const hash = inorder.reduce((a, c, i) => {
    a[c] = i;
    return a;
  }, {});

  function buildMyTree(
    preorder,
    inorder,
    preordre_left,
    preorder_right,
    inorder_left,
    inorder_right
  ) {
    if (preordre_left > preorder_right || inorder_left > inorder_right) {
      return null;
    }

    let preorder_root = preordre_left;
    let inorder_root = hash[preorder[preorder_root]];

    let root = new TreeNode(preorder[preorder_root]);
    let size_left_subtree = inorder_root - inorder_left;

    root.left = buildMyTree(
      preorder,
      inorder,
      preordre_left + 1,
      preordre_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );

    root.right = buildMyTree(
      preorder,
      inorder,
      preordre_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );
    return root;
  }

  return buildMyTree(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    preorder.length - 1
  );
};

// @lc code=end
