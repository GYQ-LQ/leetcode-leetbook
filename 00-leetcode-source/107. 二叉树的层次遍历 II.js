/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let queue = [],
    res = [],
    list = [],
    arr = []
  if (!root) return res;
  queue.push(root)
  while (queue.length) {
    while (queue.length) {
      list.push(queue.shift())
    }
    while (list.length) {
      let p = list.shift()
      arr.push(p.val)
      if (p.left) {
        queue.push(p.left)
      }
      if (p.right) {
        queue.push(p.right)
      }
    }
    res.unshift(arr)
    arr = []
  }
  return res
};
