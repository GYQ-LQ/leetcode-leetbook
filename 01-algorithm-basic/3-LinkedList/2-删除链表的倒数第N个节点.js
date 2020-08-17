/* 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p = head,
    q = head;
  while (n--) {
    p = p.next
  }
  if (p === null) {
    head = head.next;
    return head;
  }
  while (p.next) {
    p = p.next
    q = q.next
  }
  q.next = q.next.next;
  return head
};
var removeNthFromEnd = function (head, n) {
  let newhead = new ListNode(null);
  newhead.next = head;
  let q = newhead,
    p = newhead,
    j = 0;
  let len = 0;
  while (q != null) {
    len++;
    q = q.next;
  }
  while (j < (len - n - 1) && p != null) {
    j++;
    p = p.next;
  }
  p.next = p.next.next;
  return newhead.next;
};

var removeNthFromEnd = function (head, n) {
  let cur1 = head,
    cur2 = head;
  let i = 0;
  while (i < n) {
    i++;
    cur1 = cur1.next;
  }
  if (!cur1)
    return head.next;
  while (cur1.next) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  cur2.next = cur2.next.next;
  return head;
};
