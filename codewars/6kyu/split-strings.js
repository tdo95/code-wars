/*

Split Strings

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

INSTRUCTIONS
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

//SOLUTON
//split string into array of 2 char strings
function solution(str){
    let result = [];
    //iterate over every second char
    for (let i = 0; i < str.length; i += 2) {
      //check second char - if not defined push underscore
      result.push(str[i] + (str[i + 1] || '_'));
    }
    return result;
  }
  
  console.log(solution('hey how are ya')) //['he', 'y ', 'ho', 'w ', 'ar', 'e ', 'ya']
  console.log(solution('heyyo')) //['he', 'yy', 'o_']