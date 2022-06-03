function incrementString (strng) {
    
    for(let i = 0; i < strng.length; i++) {
    
      if(isNaN(strng[i])){
        continue;
      } 
      else if (isFinite(strng[i])) {
       let numLength = strng.slice(i).length
       let newNum = String(+strng.slice(i) + 1);
       let paddedNum = newNum.padStart(numLength,'0')
       
       return strng.slice(0, i) + paddedNum
      }
    }
    return strng + '1';
  }