var detectCycle = function (head) {
  // 1. 判断是否有环：快慢指针相遇
  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // 慢指针走一步
    fast = fast.next.next;   // 快指针走两步

    if (slow === fast) {     // 相遇说明有环
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) return null;  // 没环直接返回

  // 2. 找入环点：将一个指针移到起点，两指针同速前进
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;  // 相遇点就是入环点
};