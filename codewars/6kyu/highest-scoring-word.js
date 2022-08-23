/*

Highest Scoring Word

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

INSTRUCTIONS
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

//SOLUTION
//returning highest scoring word
function high(x){
  
    let highWord, highScore = 0;
    let wordList = x.split(' ');
  
    for (let i = 0; i < wordList.length; i++) {
      //calculate word score
      let score = [...wordList[i]].reduce((total, curr) => total += (curr.toUpperCase().codePointAt(0) - 64), 0);
      if (score > highScore) {
        highWord = wordList[i];
        highScore = score;
      }   
    }
    return highWord;
  }
  
  console.log(high('a b c')) //c
  console.log(high('be you')) //you