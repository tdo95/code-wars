function comp(array1, array2){
    if (!array1 || !array2) return false;  
    
    for (let i = 0; i < array2.length; i++) {
      let sqrtIndex = array1.indexOf(array2[i] ** (1/2))
      
      if (sqrtIndex != -1) {
        array1[sqrtIndex] = 0;  
      } else return false;
    }
    return true;
  }