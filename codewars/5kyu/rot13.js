/*

Rot13

https://www.codewars.com/kata/530e15517bc88ac656000716/javascript

INSTRUCTIONS
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

//SOLUTION
function rot13(message){
    return [...message].map(letter => {
      if (letter.toUpperCase() !== letter.toLowerCase()) {
        let startingPoint = letter === letter.toUpperCase() ? 65 : 97;
        let newPosition = ((letter.codePointAt(0) % startingPoint) + 13) % 26;
        return String.fromCodePoint(startingPoint + newPosition);
      }
      return letter;  
    }).join('');
  }