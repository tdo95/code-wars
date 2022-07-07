function pigIt(str){
    return str.split(' ').map(word => {
      if(word.toUpperCase() !== word.toLowerCase()) {
        word = word.slice(1) + word[0] + 'ay';
      }
      return word;
    }).join(' ');
  }