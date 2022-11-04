/*
Word a10n (abbreviation)

https://www.codewars.com/kata/5375f921003bf62192000746/javascript

INSTRUCTIONS

The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

*/

//SOLUTION
//convert words within a string into abbreviated format
function abbreviate(string) {
 
    let word = "";
    let abbreviatedString = ""
    
    for (let i = 0; i < string.length; i++)  {
      let char = string[i];
      if (isAlpha(char)) {
        word += char;
      } else {
        abbreviatedString += word ? abbrevWord(word) + char : char;
        word = "";
      }
      if (string[i + 1] === undefined) {
        abbreviatedString += word ? abbrevWord(word) : "";
      }
    }
    return abbreviatedString
  
  }
  
  const isAlpha = (char) => char.toUpperCase() !== char.toLowerCase()
  const abbrevWord = (word) => word.length > 3 ? word[0] + (word.length - 2) + word[word.length - 1] : word
  
  console.log(abbreviate('hey-you')) //hey-you
  console.log( abbreviate('#hello-you-are-amazing')) //#h30-you-are-a5g
  console.log(abbreviate('')) // ''
  console.log(abbreviate('2933$%')) //2933$%
  console.log(abbreviate('hieys37hi^&lovely')) //h3s37hi^&l4y
  