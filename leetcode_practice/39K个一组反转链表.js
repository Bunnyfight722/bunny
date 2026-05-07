var reverseKGroup = function (head, k) {
  // 虚拟头节点，简化边界处理
  const dummy = new ListNode(0);
  dummy.next = head;

  // pre: 每组的前一个节点（连接点）
  let pre = dummy;

  while (true) {
    // 1. 找到第 k 个节点（当前组的末尾）
    let end = pre;
    for (let i = 0; i < k; i++) {
      end = end.next;
      if (!end) return dummy.next;  // 不足 k 个，直接返回
    }

    // 2. 保存下一组的头节点
    const nextGroupHead = end.next;

    // 3. 断开当前组与后面的连接（方便反转）
    end.next = null;

    // 4. 反转当前组
    const start = pre.next;
    pre.next = reverse(start);  // 反转后，pre 连接到新的头节点

    // 5. 连接反转后的组与下一组
    start.next = nextGroupHead;

    // 6. 移动 pre 到下一组的前一个节点
    pre = start;
  }
};

// 辅助函数：反转链表（迭代版）
function reverse(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}