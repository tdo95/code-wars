/*

Vowel remover

https://www.codewars.com/kata/5547929140907378f9000039/javascript

INSTRUCTIONS
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

//SOLUTION
function shortcut (string) {
    return [...string].filter(letter => !['a','e','i','o','u'].includes(letter)).join('');
  }