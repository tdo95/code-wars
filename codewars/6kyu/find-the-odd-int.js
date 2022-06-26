function findOdd(A) {
    let numOccurences = A.reduce((obj, num) => {
      if(!(num in obj)) obj[num] = 1;
      else obj[num] += 1;
      return obj
    }, {});
    
    for (let num in numOccurences) {
      if(numOccurences[num] % 2 === 1)
        return +num;
    }  
}