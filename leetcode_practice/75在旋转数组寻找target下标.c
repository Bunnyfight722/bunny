// 153. 寻找旋转排序数组中的最小值（返回的是下标）
int findMin(int *nums, int numsSize)
{
  int left = -1, right = numsSize - 1; // 开区间 (-1, n-1)
  while (left + 1 < right)
  { // 开区间不为空
    int mid = left + (right - left) / 2;
    if (nums[mid] < nums[numsSize - 1])
    {
      right = mid;
    }
    else
    {
      left = mid;
    }
  }
  return right;
}

// 有序数组中找 target 的下标
int lowerBound(int *nums, int left, int right, int target)
{
  while (left + 1 < right)
  { // 开区间不为空
    // 循环不变量：
    // nums[right] >= target
    // nums[left] < target
    int mid = left + (right - left) / 2;
    if (nums[mid] >= target)
    {
      right = mid; // 范围缩小到 (left, mid)
    }
    else
    {
      left = mid; // 范围缩小到 (mid, right)
    }
  }
  return nums[right] == target ? right : -1;
}

int search(int *nums, int numsSize, int target)
{
  int i = findMin(nums, numsSize);
  if (target > nums[numsSize - 1])
  {                                         // target 只可能在第一段
    return lowerBound(nums, -1, i, target); // 开区间 (-1, i)
  }
  // target 只可能在第二段
  // 由于此时 target <= nums[n-1]，所以 lowerBound 中的循环结束后，right < n 一定成立，无需判断 right == n
  return lowerBound(nums, i - 1, numsSize, target); // 开区间 (i-1, n)
}