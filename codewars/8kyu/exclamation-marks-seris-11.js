/*
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/javascript

INSTRUCTIONS

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//SOLUTION

//replace all vowels with !
//input -> sentence[str]
//output -> sentence updated [str]
function replaceVowel(string) {
    //iterate over each letter
    //check if letter is vowel
      //if vowel -> covert to !
    const vowels = ['a', 'e', 'i', 'o','u']
    const updatedString = string.split('').map(letter => vowels.includes(letter.toLowerCase()) ? '!' : letter).join('')
    return updatedString
  }
  console.log(replaceVowel('Hi')) //H!
  console.log(replaceVowel('HellO')) //H!ll!
  console.log(replaceVowel('He#!llO')) //H!#!ll!