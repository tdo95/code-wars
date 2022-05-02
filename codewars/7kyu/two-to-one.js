function longest(s1, s2) {
    let letters = s1 + s2;
    let longest = [];
    letters.split('').sort().forEach( l => {if( ! longest.includes(l)) longest.push(l)})
    return longest.join('')
  }