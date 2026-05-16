function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function sortList(head) {
  // 递归终止条件：链表为空或只有一个节点
  if (!head || !head.next) return head;

  // 第一步：找到链表中点，分割成两个子链表
  const mid = findMiddle(head);
  const rightHead = mid.next;
  mid.next = null; // 断开连接

  // 第二步：递归排序左右两个子链表
  const left = sortList(head);
  const right = sortList(rightHead);

  // 第三步：合并两个有序链表
  return merge(left, right);
}

// 找链表中点（快慢指针法）
function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// 合并两个有序链表
function merge(l1, l2) {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}