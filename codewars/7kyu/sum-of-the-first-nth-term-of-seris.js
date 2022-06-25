function SeriesSum(n)
{
  let sum = 0;
  for(let i = 1, f = 1; i <= n; i++, f += 3) {
    sum += (1/f)
  }
  return sum.toFixed(2)
}