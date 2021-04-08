function merge (intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals);
  let res = []
  let last = intervals.reduce((pre, cur) => {
    if (pre[1] >= cur[0]) {
      if (pre[1] < cur[1])
        pre[1] = cur[1];
      return pre;
    } else {
      res.push(pre);
      return cur;
    }
  })
  res.push(last)
  return res
};

merge([[1, 3], [15, 18], [2, 6], [8, 10]])