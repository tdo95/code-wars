function rowSumOddNumbers(n) {
    n = n - 1
    // find the odd number to begin counting at
    // use series formula to find index, multiply by 2 and add 1 to get actuall odd number
    let startNum = ( n * (1 + n) / 2 ) * 2 + 1 
    
    // Get sum of next numbers
    let sum = startNum;
    for (let i = 0, x = startNum; i < n; i++){
      x += 2;
      sum += x;
    }
    return sum
  }