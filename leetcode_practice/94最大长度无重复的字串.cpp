class Solution
{
public:
  int lengthOfLongestSubstring(string s)
  {
    vector<char> win;
    int maxLen = 0;
    for (char c : s)
    {
      // 找到重复位置
      auto it = find(win.begin(), win.end(), c);
      if (it != win.end())
      {
        // 只删掉重复及左边，不清空！
        win.erase(win.begin(), it + 1);
      }
      win.push_back(c);
      maxLen = max(maxLen, (int)win.size());
    }
    return maxLen;
  }
};