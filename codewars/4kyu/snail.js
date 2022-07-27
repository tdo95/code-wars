/*

Snail

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

INSTRUCTIONS
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/

//SOLUTION
snail = function(array) {
  
    let result = [];
    let position = ['right','down','left','up'];
    let turns = 0;
    let direction = position[turns % 4];
    let x = 0, y = 0;
    let nextX, nextY;
    
    for (let i = 0; i < array.length ** 2; i++) {
      
      if (array[x][y] !== undefined) {
        //push value to result
        result.push(array[x][y]);
        //change value to undefined;
        array[x][y] = undefined
      }
      //get next value 
      [nextX, nextY] = getNextItem(direction,x,y);
      //if next value is undefined
      if (array[nextX] === undefined || array[nextX][nextY] === undefined) {
        //change directions
        turns++;
        direction = position[turns % 4];
        //update next coordinates
        [nextX, nextY] = getNextItem(direction,x,y);
      }
      x = nextX;
      y = nextY  
    }
    
    return result;
  }
  
  function getNextItem(direction, x, y) {
    if (direction === 'right') return [x, y + 1];
    else if (direction === 'down') return [x + 1, y];
    else if (direction === 'left') return [x, y - 1];
    else return [x - 1, y];
  }