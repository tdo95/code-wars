/*

Kebabize

https://www.codewars.com/kata/57f8ff867a28db569e000c4a/solutions/javascript

INSTRUCTIONS
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

*/

//SOLUTION
//convert camelcase to kebab case
function kebabize(str) {
    let kebabCase = "";
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char.toUpperCase() !== char.toLowerCase()) {
        if (char === char.toUpperCase() && kebabCase) {
          kebabCase += '-' + char.toLowerCase();
        }
        else kebabCase += char.toLowerCase();
      }
    }
    return kebabCase;
  }
  
  console.log(kebabize('2397#$#')) // ""
  console.log(kebabize('hithere4748you')) //hithereyou
  console.log(kebabize('theDogJumped')) //the-dog-jumped