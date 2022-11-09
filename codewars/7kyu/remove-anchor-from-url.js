/*

Remove anchor from URL

https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript

INSTRUCTIONS

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

//SOLUTION
function removeUrlAnchor(url){
    return url.split('#')[0];
  }
  
  console.log(removeUrlAnchor('www.jon#.com')) //www.jon
  console.log(removeUrlAnchor('www.hello.com')) //www.hello.com
  console.log(removeUrlAnchor('#www.hello.com')) //
  console.log(removeUrlAnchor('###')) //
  console.log(removeUrlAnchor('')) //