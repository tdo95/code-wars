/*

Beginner - Reduce but Grow

https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

INSTRUCTIONS
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

//SOLUTION
function grow(x){
    return x.reduce((product, value) => product * value, 1);
  }