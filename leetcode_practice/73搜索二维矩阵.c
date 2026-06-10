bool searchMatrix(int **matrix, int matrixSize, int *matrixColSize, int target)
{
  // 逐行遍历
  for (int i = 0; i < matrixSize; i++)
  {
    // 获取当前行真实列数量（修复你原来sizeof算长度的错误）
    int colNum = matrixColSize[i];
    int start = matrix[i][0];
    int end = matrix[i][colNum - 1];

    // 判断目标是否在这一行的数值区间内
    if (target >= start && target <= end)
    {
      // 每行二分必须重新初始化左右边界（修复min/max只初始化一次的bug）
      int min = 0;
      int max = colNum - 1;

      // 二分循环
      while (min <= max)
      {
        int mid = (min + max) / 2;
        if (matrix[i][mid] < target)
        {
          min = mid + 1;
        }
        else
        {
          max = mid - 1;
        }
      }
      // 二分结束后min是插入位置，校验这个位置的值是不是target
      // 要防止min越界
      if (matrix[i][min] == target)
      {
        return true;
      }
      else
      {
        // 在这一行区间里却找不到，直接返回false
        return false;
      }
    }
  }
  // 所有行区间都不包含target
  return false;
}