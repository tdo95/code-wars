function find_average(array) {
    return array.length ? array.reduce((sum, n) => sum + n, 0) / array.length : 0;
  }