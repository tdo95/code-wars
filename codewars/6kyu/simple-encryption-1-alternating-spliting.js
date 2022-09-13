/*

Simple Encryption #1 - Alternating Split

https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript

INSTRUCTIONS
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

//SOLUTION
//return encrypted value by grouping even nums and odd nums and then combining
function encrypt(text, n) {
    //if string empty or n is negative return first arg
      if (!text || n < 1) return text;
      
      //loop n times
      for (let i = 0; i < n; i++) {
        let evenChars = "", oddChars = "";
        //for length of text
        for (let j = 0; j < text.length; j++) {
          //grab even numbers & odd nums and combine
          if (j % 2 === 0) evenChars += text[j];
          else oddChars += text[j];
        }
        //set text to new value
        text = oddChars + evenChars;
      }
      return text;   
    }
    
    console.log(encrypt('3728', 1)) //7832
    console.log(encrypt('38266', 3)) //86326 -> 62836 -> 23686
    
    function decrypt(encryptedText, n) {
      if (!encryptedText || n < 1) return encryptedText;
      let newText = encryptedText;
     
      for (let i = 0; i < n; i++) {
        let oddHalf = [...newText];
        //split value in half
        let evenHalf = oddHalf.splice(Math.floor(newText.length / 2));
        let unscrambled = [];
        //pull from each half
        while (evenHalf.length && oddHalf.length) {
          unscrambled.push(evenHalf.shift());
          unscrambled.push(oddHalf.shift());
        }
        newText = [...unscrambled, ...evenHalf, ...oddHalf].join('');
      }
      return newText;
    }
    
    console.log(decrypt('7832', 1)) //3728