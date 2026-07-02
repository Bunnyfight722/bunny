class Solution
{
public:
  vector<int> findAnagrams(string s, string p)
  {
    vector<int> a(26, 0), b(26, 0), ans;
    int m = p.size(), n = s.size();
    if (m > n)
      return ans;
    for (int i = 0; i < m; i++)
      a[p[i] - 'a']++, b[s[i] - 'a']++;
    if (a == b)
      ans.push_back(0);
    for (int i = m; i < n; i++)
    {
      b[s[i - m] - 'a']--;
      b[s[i] - 'a']++;
      if (a == b)
        ans.push_back(i - m + 1);
    }
    return ans;
  }
};