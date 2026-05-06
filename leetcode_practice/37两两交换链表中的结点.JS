var swapPairs = function (head) {
  // 虚拟头节点，简化边界处理
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  // 当有至少两个节点时进行交换
  while (current.next !== null && current.next.next !== null) {
    // 保存需要交换的两个节点
    const first = current.next;
    const second = current.next.next;

    // 交换操作
    current.next = second;      // 步骤1
    first.next = second.next;   // 步骤2
    second.next = first;        // 步骤3

    // 移动到下一组
    current = first;
  }

  return dummy.next;
};