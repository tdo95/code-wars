function digital_root(n) {
    let root = n.toString();
    
    while (root.length > 1) {
      root = [...root].reduce((sum, num) => +sum + +num, 0).toString();
    }
    
    return +root;
    
  }