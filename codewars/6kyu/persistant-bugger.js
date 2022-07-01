function persistence(num) {
    let count = 0;
    num = String(num);
    
    while (num.length > 1) {
      let result = num.split('').reduce((sum,n) => sum * n, 1);
      num = String(result);
      count++
    }
    return count;
    
  }