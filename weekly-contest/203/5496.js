/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b)
  let len = piles.length / 3,
    lastind = piles.length - 2,
    res = 0
  while (len--) {
    res += piles[lastind]
    lastind -= 2
  }
  return res
};
maxCoins([2, 4, 1, 2, 7, 8])
