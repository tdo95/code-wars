/*
Remove First and Last Character Part Two

https://www.codewars.com/kata/570597e258b58f6edc00230d/javascript

INSTRUCTIONS
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

*/

//SOLUTION
//remove the first and last elements from a string
//input => list of chars [str]
//output => list of chars, with first and last removed [str]
function removeFirstAndLastChars(listOfChars) {
    // //seperate items into arr
    // let charArr = listOfChars.split(',')
    // //remove first last items
    // let reducedArr = charArr.slice(1,charArr.length - 1)
    // //join array items by space
    // return reducedArr.join(' ') || null

    return listOfChars.split(',').slice(1,-1).join(' ') || null
  }
  
  console.log(removeFirstAndLastChars('CH,3,5,TR')) //3 5
  console.log(removeFirstAndLastChars('3,5')) //NULL
  console.log(removeFirstAndLastChars('')) //NULL