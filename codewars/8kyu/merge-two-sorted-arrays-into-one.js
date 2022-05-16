function mergeArrays(arr1, arr2) {
    let result = arr1.concat(arr2).sort((a,b) => a - b);
    result.forEach((x,i) => {
       if(x === result[i + 1]) result.splice(i, 1);
    });
    return result;
  }