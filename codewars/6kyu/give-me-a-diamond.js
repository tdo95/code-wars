/*

Give me a Diamond

https://www.codewars.com/kata/5503013e34137eeeaa001648/javascript

INSTRUCTIONS
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

*/

//SOLUTION
//return diamond shape string of size n
function diamond(n){
    if (n < 1 || n % 2 === 0) return null;
    
    let diamon = "";
    
    for (let line = 1, stars = 1; line <= n; line++, stars += 2) {
      //determine amount of stars
      let starAmt = Math.abs(stars);
      //build row 
      let row = " ".repeat((n - starAmt) / 2) + "*".repeat(starAmt) + "\n"
      //add row to shape
      diamon += row;
      //check for middle value - if so start decreasing stars
      if (stars === n) stars *= -1;
    }
    
    return diamon;
    
  }
  console.log(diamond(0)) //null
  console.log(diamond(2)) //null
  console.log(diamond(3)) // " *\n***\n *\n"