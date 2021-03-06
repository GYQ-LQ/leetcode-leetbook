const PredictTheWinner = (nums) => {
  const len = nums.length;

  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
  }
  // base case
  for (let i = 0; i < len; i++) {
    dp[i][i] = nums[i];
  }
  // iteration
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      const pickI = nums[i] - dp[i + 1][j];
      const pickJ = nums[j] - dp[i][j - 1];
      dp[i][j] = Math.max(pickI, pickJ);
    }
  }

  return dp[0][len - 1] >= 0;
};
