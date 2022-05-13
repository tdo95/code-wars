function eachCons(array, n) {
    let subsets = [];
  
    //For each item
    for(let i = 0; i < array.length; i++){
      //Create an array of size n
      let subarr = [];
      for(let j = i; j < (i + n); j++ ){
        //If next item is undefined return subsets without pushing current array
        if(array[j] === undefined) return subsets;
        subarr.push(array[j]);
      }
      subsets.push(subarr);
    }
    return subsets;   
  }