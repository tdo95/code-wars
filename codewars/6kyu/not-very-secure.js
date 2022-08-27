/*

Not very secure

https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript

INSTRUCTIONS
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

*/

//SOLUTION
//validate that string only include alphanumeric values
function alphanumeric(string){
    return string.trim() === '' ? false : string.split('').every(char => { 
      if(isFinite(char) && char !== ' ' || char.toUpperCase() !== char.toLowerCase() ) return true;
      else return false;
    })
  
  }
  console.log(alphanumeric('34#$#skfj')) //false
  console.log(alphanumeric('hello')) //true
  console.log(alphanumeric('')) //false