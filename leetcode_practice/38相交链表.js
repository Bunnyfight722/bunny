var getIntersectionNode = function (headA, headB) {
  // 两个指针分别从两个链表头开始
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    // 如果pA走完了，就去走B链表
    pA = pA ? pA.next : headB;
    // 如果pB走完了，就去走A链表
    pB = pB ? pB.next : headA;
  }

  // 相遇时返回，就是交点
  return pA;
};