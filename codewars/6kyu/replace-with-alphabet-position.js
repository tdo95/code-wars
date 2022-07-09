function alphabetPosition(text) {
    return text.split('')
      .filter(letter => letter.toUpperCase() != letter.toLowerCase())
      .map(letter => letter.toUpperCase().codePointAt(0) % 64)
      .join(' ');
  }