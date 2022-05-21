function missingNo(nums) {
    const sumOf100Nums = 100 * (1 + 100) / 2
    const sumOfArr = nums.reduce((sum, n) => sum + n, 0)
    return sumOf100Nums - sumOfArr;
  }