
/*

Human Readable Time

https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

INSTRUCTIONS
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

//SOLUTION
function humanReadable (seconds) {
  
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
  }