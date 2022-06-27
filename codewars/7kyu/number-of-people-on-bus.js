var number = function(busStops){
    return busStops.reduce((sum, item) => sum + item[0] - item[1], 0);
  }