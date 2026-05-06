var firstMissingPositive = function (nums) {
  const n = nums.length;

  // 第一步：原地哈希，将数字放到正确位置
  for (let i = 0; i < n; i++) {
    // 只有当 nums[i] 是正数且在 [1, n] 范围内，才需要交换
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // 交换 nums[i] 和 nums[nums[i]-1]
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  // 第二步：查找缺失的第一个正数
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // 如果都在正确位置，返回 n+1
  return n + 1;
};