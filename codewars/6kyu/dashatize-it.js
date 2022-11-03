/*

Dashatize it

https://www.codewars.com/kata/58223370aef9fc03fd000071/javascript

INSTRUCTIONS
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

//SOLUTION
//return a string with dashes before and after odd integers
function dashatize(num) {
    //if input is not a number, return NaN
    if (isNaN(num)) return 'NaN';
    
    //else convert to positive string
    const numString = Math.abs(num).toString();
    
    if (numString.length === 1) return numString;
   
    let dashString = "";
    //build the new dashatized num
    for (let i = 0; i < numString.length; i++) {
      
      if (numString[i] % 2 === 1) {
        //if number is first and there is a value after it
        if (i === 0) { 
          dashString += numString[i] + '-';
        }
        //if number is last and a value before it
        else if ( i === numString.length - 1) {
          if (dashString[dashString.length - 1] !== '-' ) {
            dashString += '-' + numString[i];
          } else dashString += numString[i];
        }
        //if last value is dash
        else if (dashString[dashString.length - 1] === '-') {
          dashString += numString[i] + '-';
        }
        else {
          dashString += '-' + numString[i] + "-";
        }
      }
      else dashString += numString[i];
    }
    
    return dashString;
    
  }
  
  console.log(dashatize('lk8898')) //'NaN'
  console.log(dashatize(44446443)) //'44446443'
  console.log(dashatize(4877382733)) //48-7-7-3-82-7-3-3