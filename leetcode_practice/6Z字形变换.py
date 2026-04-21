class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # 多行字符列表
        matrix = [[] for _ in range(len(s))]

        # diff == -1 表示 i 递减，diff == 1 表示 i 递增。
        # 视为 i 即将从 1 减至 0，然后开始递增，这样代码好写。
        i = 1
        diff = -1 

        # 遍历更新 matrix
        for char in s:
            i += diff
            if i == 0 or i == numRows - 1:
                diff *= -1 # 变更递减或递增

            matrix[i].append(char)

        # 拼接
        return ''.join(''.join(row) for row in matrix)
