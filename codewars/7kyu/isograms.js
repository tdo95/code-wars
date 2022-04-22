function isIsogram(str){
  
    str = str.toLowerCase()
    
    //compare each letter to every other letter
    for(let i = 0, l = str.length; i < l; i++) {
      for(let j = i + 1; j < l; j++) {
        if( str[i] === str[j]) return false
      }
    }
    return true
}