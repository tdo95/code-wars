function gimme (triplet) {
    let sortedArr = triplet.slice().sort((a,b) => a - b);
    return triplet.indexOf(sortedArr[1]);
  }