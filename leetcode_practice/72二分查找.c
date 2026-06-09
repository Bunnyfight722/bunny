int searchInsert(int *nums, int numsSize, int target)
{
  int max = numsSize - 1;
  int min = 0;
  while (max >= min)
  {
    int mid = (max + min) / 2;
    if (nums[mid] < target)
    {
      min = mid + 1;
    }
    else
    {
      max = mid - 1;
    }
  }
  return min;
}