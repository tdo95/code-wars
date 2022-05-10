function binToDec(bin){

    let binaryPlace = 1;
    let decimal = 0;
    
    for(let i = bin.length - 1; i >= 0; i--) {  
      if(bin[i] === '1') decimal += binaryPlace;
      binaryPlace *= 2 
    }
    return decimal
  }