/*

Strings Mix

https://www.codewars.com/kata/5629db57620258aa9d000014

INSTRUCTIONS
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

*/

//SOLUTION
function mix(s1, s2) {
    // count amount of each letter in the in each string
    let s1Map = s1.split('').reduce((obj,str) => {
      if (str == str.toLowerCase() && str.toLowerCase() !== str.toUpperCase()) {
        if (!obj[str]) obj[str] = str;
        else obj[str] += str;
      }
      return obj;
    },{});
    let s2Map = s2.split('').reduce((obj,str) => {
      if (str == str.toLowerCase() && str.toLowerCase() !== str.toUpperCase()) {
        if (!obj[str]) obj[str] = str;
        else obj[str] += str;
      }
      return obj;
    },{});
   
    //compare amount of letters in both string, only include letters > 1
    let result = []
    for (let str in s1Map) {
      let str1 = s1Map[str], str2 = s2Map[str]
      if (str1 && str2 && (str1.length > 1 || str2.length > 1) ) {
        if (str1.length > str2.length)
          result.push('1:' + str1);
        else if (str2.length > str1.length)
          result.push('2:' + str2);
        else result.push('=:' + str1);
      }
      else if (str1.length > 1) result.push('1:' + str1);
    }
    //include s2 letters > 1 in result
    for (let str in s2Map) {
      if (!s1Map[str] && s2Map[str].length > 1) result.push('2:' + s2Map[str]);
    }
    
   //sort by greastest to least or if the same, lexographical order
    result.sort((a,b) => {
      if((b.length - 2) === (a.length - 2)) {
        if (a[0] === '=' && b[0] !== '=') return 1;
        else if (b[0] === '=' && a[0] !== '=') return -1;
        else if (a[0] != b[0]) return a[0] - b[0];
        else return a[2].codePointAt(0) - b[2].codePointAt(0);  
      } 
      else return (b.length - 2) - (a.length - 2);             
    })
    
    return result.join('/');          
  }