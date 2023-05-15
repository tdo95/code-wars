/*

Sort the odd

https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

INSTRUCTIONS
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

//SOLUTION
//sort the odd numbers
function sortArray(array) {
    let oddValues = [];
    //grab odd values
    let sortedArr = array.map(num => {
      if (num % 2 !== 0) {
        oddValues.push(num);
        return 'x';
      }
      return num;
    })
    //sort
    oddValues.sort((a,b) => a - b);
    //replace odd value in order
    return sortedArr.map(num => num === 'x' ? oddValues.shift() : num);
    
  }
  
  console.log(sortArray([7,8,1])) //[1,8,7]