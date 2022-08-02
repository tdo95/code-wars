/* 

Next bigger number with the same digits

https://www.codewars.com/kata/55983863da40caa2c900004e

INSTRUCTIONS
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

//SOLUTION
function nextBigger(n){
    //split into array of string
    let arr = n.toString().split('');
    
    //from the back of array
    for (let i = arr.length - 2; i >= 0; i--) {
      
      // if current num is lower than adjacent
      if (arr[i] < arr[i + 1]) {
        
        // find next num higher than current within right portion
        let higher = Infinity, higherIndex;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < higher && arr[j] > arr[i]) higherIndex = j;
        }
        
        //swap
        if (higherIndex) [arr[i], arr[higherIndex]] = [arr[higherIndex], arr[i]];
       
        //sort rest of nums
        arr = [...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a,b) => a - b)];
        
        break;
      }
    }
    
    let result = +arr.join('');
    return result === n ? -1 : result;
  }