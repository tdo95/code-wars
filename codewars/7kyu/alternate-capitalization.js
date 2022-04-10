 //Copies string produces two of same string
 function capitalize(s){
  
    //Capitalizes even indexes 
    let evenCaps = s.split('').map((item,index) => {
        if( index % 2 == 0) {
          return item.toUpperCase();
        } else return item}).join('');
    
    //Capitalizes odd indexes 
    let oddCaps = s.split('').map((item,index) => {
        if(index % 2 == 1) {
          return item.toUpperCase();
        } else return item}).join('');
    
    return [evenCaps, oddCaps];
};