/*

Playing with passphrases

https://www.codewars.com/kata/559536379512a64472000053/javascript

INSTRUCTIONS
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

*/


//SOLUTION
//convert string into passpharase
function playPass(s, n) {
    return s
      .split('')
      .map((letter, index) => {

      if (letter.toUpperCase() !== letter.toLowerCase()) {
        let rotated = (letter.toLowerCase().codePointAt(0) - 97 + n) % 26;
        letter = String.fromCodePoint(rotated + 97);
        if (index % 2 === 0) return letter.toUpperCase();
        else return letter.toLowerCase();
      }
      if (!isNaN(letter) && letter !== " ") {
        return 9 - letter;
      }
      return letter;
    })
      .reverse()
      .join('');
}

console.log(playPass('hello78', 4)) //LiPpS21 -> 12SpPeL
console.log(playPass('', 3)) //
console.log(playPass('&*$&@', 3)) // @&$*&