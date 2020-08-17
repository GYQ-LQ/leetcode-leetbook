/* 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  let p = l1,
    q = l2,
    head = new ListNode(null),
    r = head;
  while (p && q) {
    if (p.val < q.val) {
      r.next = new ListNode(p.val)
      r = r.next
      p = p.next
    } else {
      r.next = new ListNode(q.val)
      r = r.next
      q = q.next
    }
  }
  while (p) {
    r.next = new ListNode(p.val)
    r = r.next
    p = p.next
  }
  while (q) {
    r.next = new ListNode(q.val)
    r = r.next
    q = q.next
  }
  return head.next
};


var mergeTwoLists = function (l1, l2) {
  if (l1 == null)
    return l2;
  else if (l2 == null)
    return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
