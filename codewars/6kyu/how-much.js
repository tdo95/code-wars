function howmuch(m, n) {
    let min = Math.min(m, n);
    let max = Math.max(m, n);
    let result = [];
    for (let i = min; i <= max; i++) {
      if ((i - 1) % 9 === 0 && (i - 2) % 7 === 0) {
        result.push([`M: ${i}`, `B: ${(i - 2) / 7}`, `C: ${(i - 1) / 9}`]);
      }
    }
    return result;
    
  }