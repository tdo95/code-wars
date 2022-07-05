function removeExclamationMarks(s) {
    return [...s].filter(letter => letter !== '!').join('');
  }