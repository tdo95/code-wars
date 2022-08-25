/*
Write Number in Expanded Form

https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

INSTRUCTIONS
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/
//SOLUTION 1
//return expanded number in string form
function expandedForm(num) {
    //convert number to string
    let numStr = num.toString()
    let result = [];
    
    //iterate over each character
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] !== '0') {
        //create expanded form for that digit
        let expanded = numStr[i].padEnd(numStr.length - i, '0')
        //add it to array
        result.push(expanded);
        
      }
    }
    
    return result.join(' + ');
  }
  console.log(expandedForm(45)) // '40 + 5'
  console.log(expandedForm(7837)) // '7000 + 800 + 30 + 7'
  console.log(expandedForm(5007)) // '5000 + 7'

//SOLUTION 2
function expandedForm(num) {
    let numStr = num.toString()
    let len = numStr.length
    return numStr
      .split('')
      .map((n, i) => n !== '0'? n.padEnd(len - i, '0') : "" )
      .filter(n => n)
      .join(' + ');
  }