/*
Row Weights

https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript

INSTRUCTIONS
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.


*/

//SOLUTION

//return total weight of two teams
// input => list of weights [arr]
// list of total weights [arr] - max 2, min 1
function calculateTotalTeamWeight(listOfWeights) {
    //reduce
    return listOfWeights.reduce((total, weight, i) => {
      total[i % 2] = total[i % 2] + weight
      return total
    },[0,0])
  
    //loop
    // const totalWeight = [0,0];
    // for (let i = 0; i < listOfWeights.length; i++) {
    //   totalWeight[i % 2] = totalWeight[i % 2] + listOfWeights[i]    
    // }
    // console.log(totalWeight)
    
  }
  
  console.log(calculateTotalTeamWeight([12,234,1])) //13, 234
  console.log(calculateTotalTeamWeight([12])) //12,0
  console.log(calculateTotalTeamWeight([12, 1, 0])) //12, 1