function accum(s) {
  
    return s.toUpperCase()
            .split('')
            .map((x,i) => {return x + x.toLowerCase().repeat(i)})
            .join('-')
  }