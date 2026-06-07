var canFinish = function (numCourses, prerequisites) {
  const g = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    g[b].push(a);
  }

  const colors = Array(numCourses).fill(0);
  // 返回 true 表示找到了环
  function dfs(x) {
    colors[x] = 1; // x 正在访问中
    for (const y of g[x]) {
      // 情况一：colors[y] === 1，表示发生循环依赖，找到了环
      // 情况二：colors[y] === 0，没有访问过 y，继续递归 y 获取信息
      // 情况三：colors[y] === 2，重复访问 y 只会重蹈覆辙，和之前一样无法找到环，跳过
      if (colors[y] === 1 || colors[y] === 0 && dfs(y)) {
        return true; // 找到了环
      }
    }
    colors[x] = 2; // x 完全访问完毕，从 x 出发无法找到环
    return false; // 没有找到环
  }

  for (let i = 0; i < numCourses; i++) {
    if (colors[i] === 0 && dfs(i)) {
      return false; // 有环
    }
  }
  return true; // 没有环
};