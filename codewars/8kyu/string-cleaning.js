function stringClean(s){
    // Filters out letters that are not numbers
    return s.split('').filter(letter => isNaN(letter) || letter === ' ').join('');
  }