/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (arr) {
  if (arr.length <= 1) return 0
  if (arr.length === 2) return Math.min(...arr)
  let minabs = Math.abs(getSum(arr.slice(0, 1)) - getSum(arr.slice(1))),
    mini = 1;
  for (i = 2; i < arr.length; i++) {
    let abs = Math.abs(getSum(arr.slice(0, i)) - getSum(arr.slice(i)))
    if (abs < minabs) {
      minabs = abs
      mini = i
    }
  }
  let leftarr,
    rightarr,
    sumleft,
    sumright,
    sum, maxres = 0
  for (i = 1; i < arr.length; i++) {
    let abs = Math.abs(getSum(arr.slice(0, i)) - getSum(arr.slice(i)))
    if (abs === minabs) {
      mini = i
      leftarr = arr.slice(0, mini),
        rightarr = arr.slice(mini),
        sumleft = getSum(leftarr),
        sumright = getSum(rightarr),
        sum = Math.min(sumleft, sumright)
      if (sumleft < sumright)
        maxres = maxres > sum + stoneGameV(leftarr) ? maxres : sum + stoneGameV(leftarr)
      if (sumleft > sumright)
        maxres = maxres > sum + stoneGameV(rightarr) ? maxres : sum + stoneGameV(rightarr)
      if (sumleft === sumright)
        maxres = maxres > sum + Math.max(stoneGameV(leftarr), stoneGameV(rightarr)) ? maxres : sum + Math.max(stoneGameV(leftarr), stoneGameV(rightarr))

    }
  }
  return maxres
};
var getSum = function (arr) {
  let res = 0,
    i = arr.length;
  while (i--) {
    res += arr[i]
  }
  return res
}
console.log(stoneGameV([68, 75, 25, 50, 34, 29, 77, 1, 2, 69]))
