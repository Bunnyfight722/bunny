class Solution
{
public:
  int maxAreaOfIsland(vector<vector<int>> &grid)
  {
    int m = grid.size(), n = grid[0].size();
    int temp = 0, ans = 0;
    auto dfs = [&](this auto &&dfs, int i, int j) -> void
    {
      if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1)
      {
        return;
      }
      temp++;
      grid[i][j] = 2;
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
    };
    for (int i = 0; i < m; i++)
    {
      for (int j = 0; j < n; j++)
      {
        if (grid[i][j] == 1)
        {
          temp = 0;
          dfs(i, j);
          ans = max(ans, temp);
        }
      }
    }
    return ans;
  }
};