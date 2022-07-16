/*

Calculating with Functions

https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript

INSTRUCTIONS
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

//SOLUTION
function zero(equation = '+ 0') {return Math.trunc(eval(`0 ${equation}`))}
function one(equation = '+ 0') {return Math.trunc(eval(`1 ${equation}`))}
function two(equation = '+ 0') {return Math.trunc(eval(`2 ${equation}`))}
function three(equation = '+ 0') {return Math.trunc(eval(`3 ${equation}`))}
function four(equation = '+ 0') {return Math.trunc(eval(`4 ${equation}`))}
function five(equation = '+ 0') {return Math.trunc(eval(`5 ${equation}`))}
function six(equation = '+ 0') {return Math.trunc(eval(`6 ${equation}`))}
function seven(equation = '+ 0') {return Math.trunc(eval(`7 ${equation}`))}
function eight(equation = '+ 0') {return Math.trunc(eval(`8 ${equation}`))}
function nine(equation = '+ 0') {return Math.trunc(eval(`9 ${equation}`))}

function plus(num) {return `+ ${num}`}
function minus(num) {return `- ${num}`}
function times(num) {return `* ${num}`}
function dividedBy(num) {return `/ ${num}`}