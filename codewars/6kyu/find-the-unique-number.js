function findUniq(arr) {
    //get unique numbers in array
    let nums = Array.from(new Set(arr));
    
    //test which number is more occuring
    let [aCount, a] = [0, nums[0]];
    let [bCount, b] = [0, nums[1]];
    let first3Nums = arr.slice(0,4);
    
    first3Nums.forEach(x => {
      if(x === a) aCount++;
      else bCount++;
    })
    
    return aCount > bCount ? b : a; 
    
  }