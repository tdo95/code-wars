/*

Extract the domain name from a URL

https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

INSTRUCTIONS
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

//SOLUTION
function domainName(url){
    
    let slashStart = url.indexOf('//');
    let subDomain = url.indexOf('www.');
    
    let startPoint = subDomain !== -1 ? subDomain + 4 : slashStart !== -1 ? slashStart + 2 : 0;
    
    let domain = '';
    for (let i = startPoint; url[i] !== '.'; i++) domain += url[i];
   
    return domain;
  }