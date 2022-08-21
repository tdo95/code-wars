/*

Detect Pangram

https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

INSTRUCTIONS 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

//SOLUTION
//check if string contains all letter of the alphabet
function isPangram(string){
    let str = string.toLowerCase();
    return [...'abcdefghijklmnopqrstuvwxyz'].every(letter => str.includes(letter));
  }
  
  console.log(isPangram('abcdefghijklmnopqrstuvwxyz')) //true
  console.log(isPangram('Hello my name is John')) //false
  console.log(isPangram('2338 helicopters wave over my lawn')) //false
  console.log(isPangram('$%$@#$@#$@$')) //false