class Solution:
    head = None

    def flatten(self, root: Optional[TreeNode]) -> None:
        if root is None:
            return
        # 右 - 左 - 根
        self.flatten(root.right)
        self.flatten(root.left)
        root.left = None
        root.right = self.head  # 头插法，相当于链表的 root.next = head
        self.head = root  # 现在链表头节点是 root
