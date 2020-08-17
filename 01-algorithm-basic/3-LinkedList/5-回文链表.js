/* 请判断一个链表是否为回文链表。

示例 1:

  输入: 1 - > 2
输出: false
示例 2:

  输入: 1 - > 2 - > 2 - > 1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let len = 0,
    p = head;
  while (p) {
    len++
    p = p.next
  }
  let f = len % 2 === 0 ? false : true;
  let i = 0,
    q = head,
    mid = parseInt(len / 2),
    arr = [];
  while (q) {
    if (i < mid) {
      arr.push(q.val)
      i++
      q = q.next;
    } else if (i >= mid) {
      if (f && i === mid) {
        i++
        q = q.next;
        continue
      }
      let top = arr.pop()
      if (q.val !== top)
        return false
      q = q.next;
      i++
    }
  }
  return true
};
