/*
Sum The Strings

https://www.codewars.com/kata/5966e33c4e686b508700002d/javascript

DESCRIPTION
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

//SOLUTION

//return the sum of two integer strings

//input -> num [str]
//output -> sum [str]
//'' === zero

function sumStrings(num1, num2) {
    //return sum
    return (+num1 + +num2).toString()
  }
  console.log(sumStrings('   ', '5')) //5
  console.log(sumStrings('', '-222')) //-222
  console.log(sumStrings('1', '-22')) //-21
  console.log(sumStrings('13', '2')) //15
  console.log(sumStrings('', '')) //0
  