/*
Scramblies

https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript

INSTRUCTIONS
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

//SOLUTION
function scramble(str1, str2) {
    //Time comeplexity of 0(4n) (There's prob a more efficient way to go about this)
    
    //count chars in str2, convert into a map
    let str2Map = str2.split('').reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1
      return obj;
    },{});
    
    //count chars in str1 that exist in str2
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];
      if (str2Map[char]) str2Map[char] -= 1;
    }
    
    //if any chars dont exist, return false
    for (let char in str2Map) {
      if (str2Map[char] > 0) return false;
    }
    
    return true;
  }