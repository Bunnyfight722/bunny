var kthSmallest = function (root, k) {
  let ans = 0;
  function dfs(node) {
    if (node === null || k <= 0) {
      return;
    }
    dfs(node.left); // 左
    if (--k === 0) {
      ans = node.val; // 根
    }
    dfs(node.right); // 右
  }
  dfs(root);
  return ans;
};