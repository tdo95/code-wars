/*
Highest Rank Number in an Array

https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/solutions/javascript

INSTRUCTIONS
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

//SOLUTION

function highestRank(arr){
    const numMap = {
      highestRepeats: 0,
      highestValue:arr[0],
    }
    
    for (let num of arr) {
      if (numMap[num]) numMap[num] += 1
      else numMap[num] = 1
      
      if (numMap[num] > numMap.highestRepeats || (numMap[num] === numMap.highestRepeats && num > numMap.highestValue)) {
        numMap.highestRepeats = numMap[num]
        numMap.highestValue = num
      }
    }
    
    return +(numMap.highestValue)
  }