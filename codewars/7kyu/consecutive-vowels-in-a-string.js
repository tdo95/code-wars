function getTheVowels(word) {
    const vowelMap = [ 'a','e','i','o','u']
    let index = 0;
    let longest = [...word].reduce((sum,letter) =>{
      if(letter === vowelMap[index]) {
        index = (index += 1) % vowelMap.length 
        return sum += 1;
      }
      return sum;       
    },0)
    
    return longest;
  }