/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let startInd = 0,
    endInd = 1,
    res = 0
  for (let i = 0; i < s.length + 1; i++) {
    const pre = s[i - 1],
      cur = s[i]
    if (pre === undefined) {
      startInd = i
      endInd = i + 1
      continue
    }
    // console.log(pre, cur, startInd, endInd)
    if (cur !== pre && endInd - 1 === startInd) {
      startInd = i
      endInd = i + 1
    } else if (cur !== pre && endInd - 1 > startInd) {
      res += countMin(cost.slice(startInd, endInd));
      startInd = i
      endInd = i + 1
    } else if (cur === pre) {
      endInd++
    }
  }
  console.log(res)
  return res
};
var countMin = function (arr) {
  if (!arr.length) return 0
  let sum = 0,
    max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    sum += e
    max = max > e ? max : e
  }
  return sum - max
}

minCost("abaac", [1, 2, 3, 4, 5])
minCost("abc", [1, 2, 3])
minCost("aabaa", [1, 2, 3, 4, 1])
minCost("bbbaaa", [4, 9, 3, 8, 8, 9])
