var reverseList = function (head) {
  // 三个指针：前一个、当前、下一个
  let prev = null;    // 前一个节点，初始为空
  let curr = head;    // 当前节点，从头部开始

  while (curr !== null) {
    // 1. 保存下一个节点（防止丢失）
    const next = curr.next;

    // 2. 反转指针：让当前节点指向前一个节点
    curr.next = prev;

    // 3. 移动指针：prev 变成 curr，curr 变成 next
    prev = curr;
    curr = next;
  }

  // 最后 prev 就是新的头节点
  return prev;
};