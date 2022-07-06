var countBits = function(n) {
    //convert num to binary
    let bin = '';
    while (n > 0) {
      bin = (n % 2) + bin;
      n = Math.floor(n / 2);
    }
    
    return [...bin].reduce((sum,num) => +num === 1 ? sum += +num : sum, 0);
  };