/*

Valid Parentheses

https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

INSTRUCTIONS
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100

*/

function validParentheses(parens) {
  
    let parenArr = [...parens];
    let missingPairs = parenArr.map((item, index) => {
      if (item !== '(') return item;
      let pairIndex = parenArr.findIndex(pair => pair === ')');
      if (pairIndex !== -1) {
        parenArr[pairIndex] = null;
        return null;
      } else return item;
    }).filter(item => item !== null );
   
    return missingPairs.length === 0 ;
  }