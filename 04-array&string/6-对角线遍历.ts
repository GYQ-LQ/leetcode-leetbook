/* 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
示例:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出:  [1,2,4,7,5,3,6,8,9]
说明:
给定矩阵中的元素总数不会超过 100000 。
 */

function findDiagonalOrder (matrix: number[][], x: number = 0, y: number = 0, f: boolean = true): number[] {
    let m = matrix.length, res = []
    if (m == 0) return res;
    let n = matrix[0].length;
    function check (x: number, y: number) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    if (f) {
        // 从 左下 往 右上
        check(x, y) && res.push(matrix[x][y])
        if (check(x - 1, y + 1))
            return res.concat(findDiagonalOrder(matrix, x - 1, y + 1, true));
        else if (check(x, y + 1))
            return res.concat(findDiagonalOrder(matrix, x, y + 1, false));
        else if (check(x + 1, y))
            return res.concat(findDiagonalOrder(matrix, x + 1, y, false));
    } else {
        // 从 右上 往 左下
        check(x, y) && res.push(matrix[x][y])
        if (check(x + 1, y - 1))
            return res.concat(findDiagonalOrder(matrix, x + 1, y - 1, false));
        else if (check(x + 1, y))
            return res.concat(findDiagonalOrder(matrix, x + 1, y, true));
        else if (check(x, y + 1))
            return res.concat(findDiagonalOrder(matrix, x, y + 1, true));
    }
    return res
};
// console.log(
//     findDiagonalOrder([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]));
console.log(
    findDiagonalOrder([
    ]));