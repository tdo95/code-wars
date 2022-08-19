/*

Your order, please

https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript

INSTRUCTIONS
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

//SOLUTION
function order(words){
    // order the words according number it contains
    let wordPositionsCache = {}
    return words.split(' ').sort((a,b) => {
      let aPosition = findWordPosition(a);
      let bPosition = findWordPosition(b);
      return aPosition - bPosition;
    }).join(' ');
  
   function findWordPosition(word) {
     if (wordPositionsCache[word]) return wordPositionsCache[word];
     //find position of word
     let position = word.split('').find(char => isFinite(char));
     wordPositionsCache[word] = position;
     return position;
   }
  }
  
  console.log(order('1hi 4there y3ou he2llo')) //'1hi he2llo y3ou 4there'