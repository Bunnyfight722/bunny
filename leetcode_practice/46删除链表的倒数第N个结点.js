function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function removeNthFromEnd(head, n) {
  // 创建虚拟头节点，处理删除头节点的边界情况
  const dummy = new ListNode(0, head);

  // 初始化快慢指针
  let slow = dummy;
  let fast = dummy;

  // 快指针先前进 n 步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 快慢指针同步前进，直到快指针到达末尾
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // 删除慢指针后面的节点
  slow.next = slow.next.next;

  return dummy.next;
}