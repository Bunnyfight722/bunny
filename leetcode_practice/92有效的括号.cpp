class Solution
{
public:
  bool isValid(string s)
  {
    unordered_map<char, char> mp = {{')', '('}, {'}', '{'}, {']', '['}};
    vector<char> st;
    for (char ch : s)
    {
      if (ch == '(' || ch == '[' || ch == '{')
      {
        st.push_back(ch);
      }
      else if (ch == ')' || ch == ']' || ch == '}')
      {
        if (st.empty())
          return false;
        char it = mp[ch];
        char x = st.back();
        st.pop_back();
        if (x != it)
          return false;
      }
    }
    return st.empty();
  }
};