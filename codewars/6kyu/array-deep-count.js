/*
Array Deep Count

https://www.codewars.com/kata/596f72bbe7cd7296d1000029/javascript

INSTRUCTIONS
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.

*/

//SOLUTION
//return the length of all elements within an array
// arr [] (may included nested array)
// return amount of element [num]

function countElements(arr) {
    let totalLength = 0
    for (let element of arr) {
      if (Array.isArray(element)) {
        totalLength += countElements(element)
      }
      totalLength++ 
    }
    return totalLength
  }
  
  console.log(countElements([])) //0
  console.log(countElements([[]])) //1
  console.log(countElements([2,'sd',true])) //3
  console.log(countElements([2,'sd',[3,2,54, [3]]])) //8