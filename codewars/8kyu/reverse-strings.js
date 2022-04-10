function solution(str){
  
    let arr = str.split('')
    
    for (let i = 0; i < arr.length/2; i++) {
      let temp = arr[i]; 
      arr[i] = arr[(arr.length - 1) - i];
      arr[(arr.length - 1) - i] = temp;
    }
    return arr.join('')
  }