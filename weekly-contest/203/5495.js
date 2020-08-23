/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  let left = rounds[0],
    right = rounds[rounds.length - 1],
    res = []
  console.log(left, right)
  while (left !== right) {
    res.push(left);
    left = left + 1 <= n ? left + 1 : 1;
  }
  res.push(left);
  res.sort((a, b) => a - b)
  return res
};
mostVisited(7, [5, 1, 3, 5, 7, 1])
