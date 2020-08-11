var minimumTotal = function(list) {
    let res = [];
    list.map(item => {
        res.push([]);
    })
    res[0][0] = list[0][0];
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j == 0)
                res[i][0] = res[i - 1][0] + list[i][0];
            else if (j == i)
                res[i][i] = res[i - 1][i - 1] + list[i][i];
            else
                res[i][j] = (res[i - 1][j - 1] < res[i - 1][j] ? res[i - 1][j - 1] : res[i - 1][j]) + list[i][j];
        }
    }
    let min = res[res.length - 1][0];
    res[res.length - 1].map(item => {
        min = min < item ? min : item;
    })
    return min;
};
// 动态规划
// f[i][j]=min(f[i−1][j−1],f[i−1][j])+c[i][j]
// 左0右i 两种临界情况
// f[i][0]=f[i−1][0]+c[i][0]
// f[i][i]=f[i−1][i−1]+c[i][i]
console.log(minimumTotal([
    [-1],
    [2, 3],
    [1, -1, -3]
]));