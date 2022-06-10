function vowelIndices(word){
    return word.split('').map((letter, index) => {
      letter = letter.toLowerCase();
      if(letter === 'a' ||
         letter === 'e' ||
         letter === 'i' ||
         letter === 'o' ||
         letter === 'u' ||
         letter === 'y') return index + 1;
      else return '';
    }).filter(x => x);
  }
