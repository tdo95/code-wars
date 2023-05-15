/*

Multiplication table

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

INSTRUCTION

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

*/

//SOLUTION
//create a multiplication table
multiplicationTable = function(size) {
    const table = [];
    for (let i = 1; i <= size; i++) {
      const row = [];
      for (let j = 1; j <= size; j++) {
        //build row
        row.push(j * i);
      }
      table.push(row);
    }
    return table;
  }
  console.log(multiplicationTable(4)) //[[1,2,3,4], [2,4,6,8], [3,6,9,11], [4,8,12,16]]
  console.log(multiplicationTable(1)) //[[1]]
  console.log(multiplicationTable(0)) //[]