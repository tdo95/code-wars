function takeWhile (arr, pred) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      
      if( pred(arr[i]) ) {
        result.push(arr[i]);
        continue;
      }
      
      break;
    }
    
    return result;
  }