/*
Flatten and sort an array

https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/javascript

INSTRUCTIONS
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

*/

//SOLUTION

//sort two dimentional array
//input => two dim nums [arr]
//output => sorted list of nums [arr]

function sort2DArray(array) {
    //join arrays into one
    return array.reduce((arr, nestedArray) => {
      nestedArray.forEach(num => arr.push(+num))
      return arr
    }, []).sort((a,b) => a - b)
    //sort num in ascending order
  }
  
  console.log(sort2DArray([[2,1,2], [234,34,21,3], [23,3,3]])) //1,2,2,3,3,3,21,23,34,234
  console.log(sort2DArray([[2,4,5],[]])) //2,4,5
  console.log(sort2DArray([[]])) //[]