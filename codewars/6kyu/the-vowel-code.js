/*

The Vowel Code

https://www.codewars.com/kata/53697be005f803751e0015aa/javascript

INSTRUCTIONS

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/


//SOLUTION
const vowels = {a:1, e:2, i:3, o:4, u:5}

//covert lowercase vowels into numbers
function encode(string) {
  return string
    .split('')
    .map(letter => letter in vowels ? vowels[letter] : letter)
    .join('');
}

console.log(encode('you are awesome')) //y45 1r2 1w2s4m2

const numbers = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'}

//convert number encoded string into vowels
function decode(string) {
  return string
    .split('')
    .map(letter => letter in numbers ? numbers[letter] : letter)
    .join('');
}

console.log(decode('y45 1r2 1w2s4m2')) //you are awesome