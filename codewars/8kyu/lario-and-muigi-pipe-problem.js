function pipeFix(numbers){
    let arr = [];
    for(let min = Math.min(...numbers), max = Math.max(...numbers); min <= max; min++){
      arr.push(min);
    }
    return arr;
  }