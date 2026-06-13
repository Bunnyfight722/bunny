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
  return nums[right];
}