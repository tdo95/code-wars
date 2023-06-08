/*
Sum of Minimums!

https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/javascript

INSTRUCTIONS

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

*/
//SOLUTION

//find sum of all minimum values in a matrix (nested array)
// input => matrix [arr]
// output => sum [int]

function findMinimumSum(matrix) {
    //find lowest value in each arr
    //sum values
    return matrix.reduce((sum, innerArr) => {
      return sum + Math.min(...innerArr)
    }, 0)
   
  }
  console.log(findMinimumSum([[2,3],[89,34]])) // 2 + 34 = 36
  console.log(findMinimumSum([[10,8,5],[2,3,7]])) // 2 + 5 = 7