function sumOfDifferences(arr) {
    return arr.sort((a,b) => b - a).reduce((sum, x, i) => {
      if(arr[i + 1] !== undefined) {
        sum += x - arr[i + 1];
      }
      return sum;
    }, 0)
  }