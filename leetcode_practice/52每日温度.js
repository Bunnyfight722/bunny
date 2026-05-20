var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);  // 初始化结果数组
  const stack = [];  // 单调栈，存储索引

  for (let i = 0; i < n; i++) {
    // 当栈不为空，且当前温度大于栈顶温度时
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop();  // 弹出索引
      ans[idx] = i - idx;      // 计算天数差
    }
    stack.push(i);  // 当前索引入栈
  }

  return ans;
};