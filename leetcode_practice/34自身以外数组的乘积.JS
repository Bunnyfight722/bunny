var productExceptSelf = function (nums) {
  const res = new Array(nums.length).fill(1);

  // 第一步：计算左乘积
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;      // 乘以左边的乘积
    left *= nums[i];     // 更新累计乘积
  }

  // 第二步：计算右乘积并合并
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;     // 再乘以右边的乘积
    right *= nums[i];    // 更新累计乘积
  }

  return res;
};