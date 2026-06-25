class Solution
{
public:
  int coinChange(vector<int> &coins, int amount)
  {
    // dp[j]：凑j元最少硬币数，初始设无穷大
    vector<int> dp(amount + 1, INT_MAX / 2);
    dp[0] = 0; // 0元不用硬币

    // 完全背包一维：先硬币，再从小到大枚举金额
    for (int coin : coins)
    {
      for (int j = coin; j <= amount; j++)
      {
        // 不选：dp[j]  选：dp[j - coin] + 1
        dp[j] = min(dp[j], dp[j - coin] + 1);
      }
    }
    return dp[amount] < INT_MAX / 2 ? dp[amount] : -1;
  }
};