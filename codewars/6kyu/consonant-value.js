/*

Consonant value

https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript

INSTRUCTIONS

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.


*/

//SOLUTION
//return the highest consonant substring value 
function solve(s) {
    if (!s) return 0;
    
    let consonantValues = [];
    let subCount = 0;
    for (let i = 0; i < s.length; i++) {
       
      //if vowel reset count
      if ('aeiou'.includes(s[i])) {
        consonantValues.push(subCount);
        subCount = 0;
      } 
      else subCount += (s[i].codePointAt(0) - 96);
      //grab last subcount
      if (i === s.length - 1 && !('aeiou'.includes(s[i]))) {
        consonantValues.push(subCount);
      }
      
    }
    return Math.max(...consonantValues)
    
  };
  
  console.log(solve('gogetter')) //g g tt r --> 7, 7, 20 + 20 = 40, 18 -> 40