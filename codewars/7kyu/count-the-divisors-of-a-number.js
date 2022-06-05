function getDivisorsCnt(n){
  
    let numOfDivisors = 0;
    
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        numOfDivisors++;
      }
    }
    
    return numOfDivisors;
  }