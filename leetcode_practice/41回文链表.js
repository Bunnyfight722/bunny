var isPalindrome = function (head) {
  // 边界处理：空链表或单节点都是回文
  if (!head || !head.next) return true;

  // 步骤1：快慢指针找中点
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;       // 慢指针走一步
    fast = fast.next.next;  // 快指针走两步
  }

  // 步骤2：反转后半部分链表（从 slow.next 开始）
  let prev = null;
  let curr = slow.next;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 步骤3：比较前半部分和反转后的后半部分
  let p1 = head;      // 前半部分头
  let p2 = prev;      // 反转后的后半部分头
  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};