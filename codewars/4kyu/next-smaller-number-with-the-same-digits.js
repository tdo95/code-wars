/*

Next smaller number with the same digits

https://www.codewars.com/kata/5659c6d896bc135c4c00021e/javascript

INSTRUCTIONS
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.

*/

//SOLUTION
function nextSmaller(n) {
 
    let nArr = n.toString().split('');
    
    //starting from the back of the number
    for (let i = nArr.length - 2; i >= 0; i--) {
      //find the first num with atleast 1 smaller num that comes after it
      if (nArr[i] <= nArr[i + 1]) continue;
      
      //find the greatest num smaller or equal to current
      let curr = nArr[i];
      let greatestI = -1;
      for (let j = i + 1; j < nArr.length; j++) {
        let next = nArr[j]
        if ((next < curr) && next > (nArr[greatestI] || -1 )) greatestI = j;
      }
      
      //if largest not equal to i, swap them
      if (greatestI != -1 && nArr[greatestI] != curr) {
        let temp = nArr[greatestI];
        nArr[greatestI] = nArr[i];
        nArr[i] = temp; 
      }
      
      //sort remaining nums join to form new arr
      nArr  = [...nArr.slice(0, i + 1), ...nArr.slice(i + 1).sort((a, b) => b - a)];
      break;
      
    }
    
    let result = nArr.join('')
    if (result >= n || result[0] == 0) return -1;
    return +result;
    
  }