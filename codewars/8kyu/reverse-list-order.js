function reverseList(list) {
  
    for (let i = 0, temp; i < Math.floor(list.length / 2); i++) {
      temp = list[i];
      list[i] = list[list.length - 1 - i];
      list[list.length - 1 - i] = temp; 
    }
    return list;
  }