class Solution
{
public:
  vector<int> pondSizes(vector<vector<int>> &land)
  {
    int m = land.size(), n = land[0].size();
    int temp = 0;
    vector<int> st;
    auto dfs = [&](this auto &&dfs, int i, int j) -> void
    {
      if (i < 0 || i >= m || j < 0 || j >= n || land[i][j] != 0)
        return;
      temp++;
      land[i][j] = 1;
      int dir[8][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};
      for (auto &d : dir)
      {
        dfs(i + d[0], j + d[1]);
      }
    };
    for (int i = 0; i < m; i++)
    {
      for (int j = 0; j < n; j++)
      {
        if (land[i][j] == 0)
        {
          temp = 0;
          dfs(i, j);
          st.push_back(temp);
        }
      }
    }
    sort(st.begin(), st.end());
    return st;
  }
};