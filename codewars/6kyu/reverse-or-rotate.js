/*

Reverse or rotate?

https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript

INSTRUCTIONS
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".

*/

//SOLUTION
//chunks the string and then either reverses or rotates it depending on if the sum of the cubed digits is divisible by two
function revrot(str, sz) {
  
    //if string is empty or if sz is greater than length of string or equal to zero then return empty string
    if (!str || sz > str.length || sz <= 0) return "";
    
    //chunk the string
    let chunks = [];
    for (let i = 0; i < str.length; i++) {
      let adjustedIndex = i + 1;
      //if index !== 0 and is end of chunk
      if (i !== 0 && adjustedIndex % sz === 0) {
        //slice chunk and push into array
        chunks.push(str.slice(adjustedIndex - sz , adjustedIndex));
      }
    }
  
    //rotate or reverse each chunk
    let revrotArr = chunks.map(num => {
      let numArr = [...num];
      let cubedSum = numArr.reduce((sum, digit) => sum + digit ** 3, 0);
      if (cubedSum % 2 === 0) return numArr.reverse().join('');
      else {
        //add first digit to end of number
        numArr.push(numArr.shift());
        return numArr.join('');
      }
    })
    
    //return joined string
    return revrotArr.join('');
  }
  
  console.log(revrot("837273", 2)) // [83, 72, 73] -> [539(ND) | 351(ND) | 370(D)] -> 382773
  console.log(revrot("3948573948", 6)) // [394,857] -> [1800(D)] -> 758493