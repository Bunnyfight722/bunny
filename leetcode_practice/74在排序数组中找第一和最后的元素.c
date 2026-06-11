// lowerBound 返回最小的满足 nums[i] >= target 的下标 i
// 如果数组为空，或者所有数都 < target，则返回 numsSize
// 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]
int lowerBound(int *nums, int numsSize, int target)
{
  int left = 0, right = numsSize - 1; // 闭区间 [left, right]
  while (left <= right)
  { // 区间不为空
    // 循环不变量：
    // nums[left-1] < target
    // nums[right+1] >= target
    int mid = left + (right - left) / 2;
    if (nums[mid] >= target)
    {
      right = mid - 1; // 范围缩小到 [left, mid-1]
    }
    else
    {
      left = mid + 1; // 范围缩小到 [mid+1, right]
    }
  }
  // 循环结束后 left = right+1
  // 此时 nums[left-1] < target 而 nums[left] = nums[right+1] >= target
  // 所以 left 就是第一个 >= target 的元素下标
  return left;
}

int *searchRange(int *nums, int numsSize, int target, int *returnSize)
{
  int *ans = malloc(2 * sizeof(int));
  *returnSize = 2;

  int start = lowerBound(nums, numsSize, target);
  if (start == numsSize || nums[start] != target)
  {
    ans[0] = -1; // nums 中没有 target
    ans[1] = -1;
    return ans;
  }

  // 如果 start 存在，那么 end 必定存在
  int end = lowerBound(nums, numsSize, target + 1) - 1;
  ans[0] = start;
  ans[1] = end;
  return ans;
}