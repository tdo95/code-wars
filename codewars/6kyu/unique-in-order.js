/*
Unique In Order

https://www.codewars.com/kata/54e6533c92449cc251001667/javascript

INSTRUCTIONS
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//SOLUTION

//find unique elements within a sequence
//input => list of element [str, arr]
//output => unique list [arr]

function findUniqueItem(list) {
  
    return [...list].filter((item,i) => item !== list[i + 1])
  }
  
  console.log(findUniqueItem('23gGgHHh2')) //[2,3,g,G,g,H,h,2]
  console.log(findUniqueItem([2,'2'])) //[2,2]
  console.log(findUniqueItem([])) //[]
  console.log(findUniqueItem('')) //[]