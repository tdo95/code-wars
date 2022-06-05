function count (string) {
    let letterCount = {};
    for (let i = 0; i < string.length; i++) {
      if ( !(string[i] in letterCount) ) {
        letterCount[string[i]] = 1;
      } else {
        letterCount[string[i]] += 1
      }
    }
     return letterCount;
  }