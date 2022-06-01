function billboard(name, price = 30){
    return name.split('').reduce((sum,n) => sum + price, 0);
  } 