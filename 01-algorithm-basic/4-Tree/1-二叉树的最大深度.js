/* 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归
var maxDepth = function (root) {
  if (!root)
    return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// 广度优先搜索 BFS
var maxDepth = function (root) {
  if (!root)
    return 0;
  let queen = [root],
    res = 0;
  while (queen.length) {
    let len = queen.length
    while (len--) {
      let p = queen.shift()
      if (p.left)
        queen.push(p.left)
      if (p.right)
        queen.push(p.right)
    }
    res++
  }
  return res
};
