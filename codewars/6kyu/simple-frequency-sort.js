function solve(arr){
    let numCount = arr.reduce((obj,item) => {
      if( !(item in obj) ) obj[item] = 1;
      else obj[item] += 1;
      return obj;
    }, {});
    
    arr.sort((a, b) => {
      let result = numCount[a] - numCount[b];
      if (result > 0) return -1;
      if (result < 0) return 1;
      if (result === 0) return a - b;
    })
    
    return arr;
  }