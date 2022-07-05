function validateBattlefield(field) {
    let tracker = field.map(arr => arr.map(x => 0));
    
    let stats = {
      4: {
        amountAllowed: 1,
        total: 0
      },
      3: {
        amountAllowed: 2,
        total: 0
      },
      2: {
        amountAllowed: 3,
        total: 0
      },
      1: {
        amountAllowed: 4,
        total: 0
      }
    }
    
    //iterate over each cell within the feild
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        
        //skips tracked ships
        if(tracker[i][j]) continue;
        
        let position = null;
        //if ship is present
        if (field[i][j] === 1) {
            
            //check adjacent cells
            //check top/bottom cells
            if (field[i - 1]?.[j] || field[i + 1]?.[j]) position = 'vertical';
            //check left/right cells
            if (field[i]?.[j - 1] || field[i]?.[j + 1]) {
              if (position) return false;
              position = 'horizontal';
            }
          
            //check corners
            //backward diagonal
            if (field[i + 1]?.[j + 1] || field[i - 1]?.[j - 1]) return false;
            //foward diagonal
            if (field[i + 1]?.[j - 1] || field[i - 1]?.[j + 1]) return false;
            
            //track and log ships type
            if (position) {
              
              //find beginning of ship
              let trav = position === 'horizontal' ? j : i;
              while (field[position === 'horizontal' ? i : trav]?.[position === 'horizontal' ? trav : j]) trav -= 1;
              trav++ //sets trav back to valid position
              
              //log ship size and add to tracker
              let size = 0;
              while (field[position === 'horizontal' ? i : trav]?.[position === 'horizontal' ? trav : j]) {
                tracker[position === 'horizontal' ? i : trav][position === 'horizontal' ? trav : j] = 1;
                size++;
                trav++
              }
              
              //validate size
              if(!stats[size]) return false;
              else stats[size]['total'] += 1;
              
            } else {
              tracker[i][j] = 1;
              stats['1']['total'] += 1;
            } 
      }
    }
  }
  
    for (let ship in stats) {
      if (stats[ship]['amountAllowed'] !== stats[ship]['total']) return false;
    }
    
    return true;
      
  }