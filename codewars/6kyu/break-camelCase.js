// complete the function
function solution(string) {
  
    for (let i = string.length - 1; i >= 0; i--) {
      if(string[i] === string[i].toUpperCase()) {
        string = string.slice(0, i) + " " + string.slice(i);
        i--;
      }
    }
    return string;
      
  }