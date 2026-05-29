var isValidBST = function (root, left = -Infinity, right = Infinity) {
  if (root == null) {
    return true;
  }
  const x = root.val;
  return left < x && x < right &&
    isValidBST(root.left, left, x) &&
    isValidBST(root.right, x, right);
};