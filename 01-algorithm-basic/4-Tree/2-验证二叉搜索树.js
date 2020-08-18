/* 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 中序遍历 递归
  let midOrder = function (root) {
    if (!root)
      return [];
    return midOrder(root.left).concat([root.val], midOrder(root.right));
  }
  let arr = midOrder(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1])
      return false
  }
  return true
};
var isValidBST = function (root) {
  // 中序遍历 非递归，通过栈实现
  let midOrder = function (root) {
    let p = root,
      stack = [],
      res = [];
    while (p != null || stack.length) {
      while (p != null) {
        stack.push(p);
        p = p.left;
      }
      p = stack.pop();
      res.push(p.val);
      p = p.right;
    }
    return res;
  }
  let arr = midOrder(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1])
      return false
  }
  return true
};
