function deleteNth(arr,n){
  
    //pull distinct numbers from array
    let distinctNums = [];
    arr.forEach(num => {
      if( !distinctNums.includes(num) ) {
        distinctNums.push(num)
      }
    });
   
    //for loop for each distinct number
    nextNum: for(let i = 0; i < distinctNums.length; i++){
      //remove duplicates 
      let duplicates = 0;
      for(let j = 0; j < arr.length; j++){
        if(arr[j] === distinctNums[i]) {
          duplicates++;
          if(duplicates > n) {
            arr = arr.filter((x,ind) => {if(x === distinctNums[i] && ind >= j ) return false;
                                         else return true;});
            continue nextNum;
          }
        }
      }
    }
    return arr;
}