/*
Add Length

https://www.codewars.com/kata/559d2284b5bb6799e9000047/javascript

INSTRUCTIONS
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

//SOLUTION

//add length to end of word in a sentence
//input => sentence [str]
//output => list[arr]

function addLengthToWord(string) {
  //sperate each word in array
  //append length to each word
  return string.split(' ').map(word => `${word} ${word.length}`)
  
}
console.log(addLengthToWord('word')) //['word 4']
console.log(addLengthToWord('word hello')) //['word 4', 'hello 5']