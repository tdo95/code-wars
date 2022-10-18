/*

Sum Mixed Array

https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript

INSTRUCTIONS
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

//SOLUTION
function sumMix(x){
    return x.reduce((sum, digit) => sum + +digit, 0);
 }