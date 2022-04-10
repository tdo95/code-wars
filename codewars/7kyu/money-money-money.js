function calculateYears(principal, interest, tax, desired) {

    let y = 0;
    while(principal < desired) {
      
      let amtGained = Number((principal * interest).toFixed(2));
  
      let taxRemoved = Number(((amtGained * tax).toFixed(2)));
      
      let net = amtGained - taxRemoved;
      
      // Find new principle with interest added
      principal = Number((principal + net).toFixed(2));
      
      y++
    }

    return y;     
}