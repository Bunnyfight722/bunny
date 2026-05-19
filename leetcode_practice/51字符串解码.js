var decodeString = function (s) {
  if (s.length === 0) {
    return s;
  }

  // s[0] 是字母
  if ('a' <= s[0] && s[0] <= 'z') {
    // 分离出 s[0]，解码剩下的
    return s[0] + decodeString(s.slice(1));
  }

  // s[0] 是数字，后面至少有一对括号
  const i = s.indexOf('['); // 找左括号
  let balance = 1; // 左括号个数减去右括号个数
  for (let j = i + 1; ; j++) {
    if (s[j] === '[') {
      balance++;
    } else if (s[j] === ']') {
      balance--;
      if (balance === 0) { // 左右括号个数相等，找到与 s[i] 匹配的右括号 s[j]
        const k = parseInt(s.slice(0, i));
        return decodeString(s.slice(i + 1, j)).repeat(k) + decodeString(s.slice(j + 1));
      }
    }
  }
};