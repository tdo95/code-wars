function span(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
      if( !predicate(arr[i]) ) return [arr.slice(0, i), arr.slice(i)];
    }
    return [arr, []];
  }