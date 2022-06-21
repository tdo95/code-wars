function leastLarger(a,i) {
    let leastLargest = null;
    for (let j = 0; j < a.length; j++) {
      if (leastLargest === null && a[j] > a[i]) leastLargest = j;
      else if (leastLargest !== null && a[j] < a[leastLargest] && a[j] > a[i]) leastLargest = j;
    }
   
    return leastLargest === null ? -1 : leastLargest;
  }