function titleCase(title, minorWords) {
    if(!title) return '';
    
    let minorArr = !minorWords ? [] : minorWords.split(' ').map(word => word.toLowerCase())
    
    return title.toLowerCase().split(' ').map((word, index) => {
      if (minorArr.includes(word) && index !== 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    }).join(' ');
    
  }