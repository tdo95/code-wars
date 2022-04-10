class SmallestIntegerFinder {
    findSmallestInt(args) {
      
      //Linear Search
      let smallest = args[1];
      args.forEach((x) => {if(x < smallest) smallest = x;});
    
      return smallest
      
    }
  }