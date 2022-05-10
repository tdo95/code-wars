function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin) sharkSpeed /= 2
    return (sharkDistance/sharkSpeed) < (pontoonDistance/youSpeed) ? 'Shark Bait!' : 'Alive!'
  
  }