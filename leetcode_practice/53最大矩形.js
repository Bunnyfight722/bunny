var largestRectangleArea = function (heights) {
  heights.push(-1); // 最后大火收汁，用 -1 把栈清空
  const st = [-1]; // 在栈中只有一个数的时候，栈顶的「下面那个数」是 -1，对应 left[i] = -1 的情况
  let ans = 0;
  for (let right = 0; right < heights.length; right++) {
    const h = heights[right];
    while (st.length > 1 && heights[st[st.length - 1]] >= h) {
      const i = st.pop(); // 矩形的高（的下标）
      const left = st[st.length - 1]; // 栈顶下面那个数就是 left
      ans = Math.max(ans, heights[i] * (right - left - 1));
    }
    st.push(right);
  }
  return ans;
};