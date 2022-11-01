/*

Backspaces in string

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/javascript

INSTRUCTIONS
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


*/

//SOLUTION
//process the hashes in string as a backspace
function cleanString(s) {
    let strArr = s.split('');
    
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === '#') {
        //remove current previous item
        strArr[i] = "";
        strArr[i - 1] = "";
        //join and split into a new array
        strArr = strArr.join('').split('');
        //update index
        i -= 2;
      }
    }
    
    return strArr.join('');
   
  }
    
  console.log(cleanString('231@$#lkd#h#klh####skh')) //231@lskh
  console.log(cleanString('abc#d##c')) //ac