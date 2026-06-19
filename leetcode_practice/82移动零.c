void moveZeroes(int *nums, int numsSize)
{
  int k = 0;
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] != 0)
    {
      nums[k++] = nums[i];
    }
  }
  for (int i = numsSize - 1, j = 1; j <= numsSize - k; i--, j++)
  {
    nums[i] = 0;
  }
}