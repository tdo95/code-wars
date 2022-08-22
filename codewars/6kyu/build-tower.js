/*

Build Tower

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

INSTRUCTIONS
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

//SOLUTION
//build a pyramid given the number of floors
function towerBuilder(nFloors) {
    let pyramid = [];
    let pWidth = (nFloors * 2) - 1;
    
    //for each floor
    for (let i = 1; i <= nFloors; i++) {
      let numStars = (i * 2) - 1;
      let base = '*'.repeat(numStars);
      
      //add padding untill length is reached
      let frontSpaces = (pWidth - numStars) / 2;
      base = base.padStart(frontSpaces + numStars);
      base = base.padEnd(pWidth);
      
      //add floor to pyramid
      pyramid.push(base);
    }
    
    return pyramid;
  }
  
  console.log(towerBuilder(1)) //['*']
  console.log(towerBuilder(2)) //[' * ', '***']
  console.log(towerBuilder(4)) // ['   *   ', '  ***  ', ' ***** ', '*******']