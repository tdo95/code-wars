/*

CamelCase Method

https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript

INSTRUCTIONS
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

*/

//SOLUTION
String.prototype.camelCase=function(){
    return this
      .toLowerCase()
      .split(' ')
      .map(word => word ? word[0].toUpperCase() + word.slice(1) : word)
      .join('');
  }