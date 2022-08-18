/*

Convert string to camel case

https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

INSTRUCTIONS
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

//SOLUTION
//turn str sperated by dashes or underscore into pascal case
function toCamelCase(str){
    //if string is empty return
    if (str === '') return '';
    
    //split string twice (by underscores & dashes)
    let wordList = str.split('-').join("_").split("_");
    
    //transform each word
    let result = wordList.map((word, index) => (index === 0 ? word[0] : word[0].toUpperCase()) + word.slice(1).toLowerCase()
    ).join('');
    
    return result;
  }
  
  console.log(toCamelCase('the-apple-seed')) //theAppleSeed
  console.log(toCamelCase('the-apple_seed')) //theAppleSeed
  console.log(toCamelCase('The-APPLE-sEed')) //TheAppleSeed