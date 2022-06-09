function digPow(n, p){
    let sequenceSum = String(n).split('').reduce((sum, n) => {
      sum += (n ** p);
      p++;
      return sum;
    },0);
    return sequenceSum % n === 0 ? sequenceSum / n : -1; 
  }