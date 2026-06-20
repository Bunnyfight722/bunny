class Solution
{
public:
  int removeDuplicates(vector<int> &nums)
  {
    int k = 1;
    for (int i = 1; i < nums.size(); i++)
    {
      if (nums[i] != nums[i - 1])
      {                      // nums[i] 不是重复项
        nums[k++] = nums[i]; // 保留 nums[i]
      }
    }
    return k;
  }
};