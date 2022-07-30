/*

Permutations

https://www.codewars.com/kata/5254ca2719453dcc0b00027d/solutions/javascript

INSTRUCTIONS
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

*/

//SOLUTION
function permutations(string) {
    if (string.length > 1) {
      //find the next smaller strings permutations
      let perms = permutations(string.slice(1));
      
      //build present possible permutations
      let firstChar = string[0];
      let result = [];
      perms.forEach(str => {
        //build first permutation
        let base = firstChar + str;
        result.push(base);
    
        //swap first letter with every other char to find other possible permutations
        for (let i = 1; i < base.length; i++) {
          let charArr = base.split('');
          charArr[0] = charArr[i];
          charArr[i] = firstChar;
          let newStr = charArr.join('');
          
          if (!result.includes(newStr)) result.push(newStr);
        }
      });
      return result;
    }
    return [string];
  }