function XO(str) {
    let o = 0;
    let x = 0;
    str.split('').forEach(letter => {
        if(letter.toLowerCase() === 'x') x++;
        else if(letter.toLowerCase() === 'o') o++;
      })
    return o === x;
}