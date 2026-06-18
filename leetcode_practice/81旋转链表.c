struct ListNode *rotateRight(struct ListNode *head, int k)
{
  if (head == NULL)
  {
    return NULL;
  }

  // 1. 计算链表长度，并找到尾节点
  int length = 1;
  struct ListNode *tail = head;
  while (tail->next)
  {
    length++;
    tail = tail->next;
  }
  k %= length;

  // 2. 首尾相连
  tail->next = head;

  // 3. 找倒数第 k+1 个节点，作为新链表的尾节点
  struct ListNode *new_tail = head;
  for (int i = 0; i < length - k - 1; i++)
  {
    new_tail = new_tail->next;
  }

  // 4. 断开倒数第 k+1 个节点（new_tail）和倒数第 k 个节点（new_head）
  struct ListNode *new_head = new_tail->next;
  new_tail->next = NULL;
  return new_head;
}