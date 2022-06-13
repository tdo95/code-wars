function partsSums(ls) {
    let totalSum = ls.reduce((sum, num) => sum + num, 0);
    let sumOfParts = [totalSum];
    
    for(let i = 0; i < ls.length; i++) {
      totalSum -= ls[i];
      sumOfParts.push(totalSum);
    }
    return sumOfParts;
}