function findShort(s){
    let firstWordLength = s.split(' ')[0].length
    return s.split(' ').reduce((shortest, nextWord) => { nextWord.length < shortest ? nextWord.length : shortest}, firstWordLength)
  }