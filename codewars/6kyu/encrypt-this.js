/*
Encrypt this!

https://www.codewars.com/kata/5848565e273af816fb000449/javascript

INSTRUCTIONS
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

//SOLUTION
//encrypt a space seperated string
var encryptThis = function(text) {
  
    return text.split(' ').map(word => {
      
      //swap 2nd letter with last letter
      if (word.length > 2) {
        //split word into an array
        const letters = word.split('');
        //swap letters 
        [letters[1], letters[word.length - 1]] = [letters[word.length - 1], letters[1]]
        word = letters.join('');
      }
      
      //convert first letter to ASCII code
      return word.codePointAt(0) + word.slice(1);
      
    }).join(' ');
  }
  
  console.log(encryptThis('Doggy')) // 68yggo