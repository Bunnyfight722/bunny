var rightSideView = function (root) {
  if (root === null) {
    return [];
  }
  const ans = [];
  let cur = [root];
  while (cur.length) {
    ans.push(cur[cur.length - 1].val);
    const nxt = [];
    for (const node of cur) {
      if (node.left) nxt.push(node.left);
      if (node.right) nxt.push(node.right);
    }
    cur = nxt;
  }
  return ans;
};