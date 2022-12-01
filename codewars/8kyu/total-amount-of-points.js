/*

Total amount of points

https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

INSTRUCTIONS

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

//SOLUTION
//convert scores into team points and return sum
function points(games) {
    return games.reduce((sum, score) => {
      let x = score[0], y = score[2];
      if (x > y) return sum + 3;
      else if (y > x) return sum + 0;
      else return sum + 1;
    }, 0);
  }
  
  console.log(points(['0:0'])) //1
  console.log(points(['3:9'])) //0
  console.log(points(['8:2', '1:1'])) //4