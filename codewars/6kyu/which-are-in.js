/*

Which are in?

https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript

INSTRUCTIONS
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.

*/

//SOLUTION
//return sorted list of strings in arr1 that are substring in arr2
function inArray(array1,array2){
    //filter out words in array1 that are not substrings in arr2
    let substrings = [];
    for (let i = 0; i < array1.length; i++) {
      let isSubstring = array2.find(word => word.includes(array1[i]));
      if (isSubstring) substrings.push(array1[i]);
    }
    return substrings.sort();
  }
  console.log(inArray(['pass', 'aa', 'card'], ['passowrd', 'cars', 'love', 'aaron'])) //['aa', 'pass']