void setZeroes(int **matrix, int matrixSize, int *matrixColSize)
{
  int m = matrixSize, n = matrixColSize[0];
  bool *row_has_zero = calloc(m, sizeof(bool)); // 行是否包含 0
  bool *col_has_zero = calloc(n, sizeof(bool)); // 列是否包含 0

  for (int i = 0; i < m; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (matrix[i][j] == 0)
      {
        row_has_zero[i] = col_has_zero[j] = true;
      }
    }
  }

  for (int i = 0; i < m; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (row_has_zero[i] || col_has_zero[j])
      {                   // i 行或 j 列有 0
        matrix[i][j] = 0; // 题目要求原地修改，无返回值
      }
    }
  }

  free(row_has_zero);
  free(col_has_zero);
}