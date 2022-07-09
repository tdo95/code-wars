function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    
    let year,day,hour,minute,sec;
    const time = [];
    
    if (seconds >= 31536000) {
      time.push([Math.floor(seconds/31536000),'year']);
      seconds = seconds % 31536000;  
    }
    if (seconds >= 86400) {
      time.push([Math.floor(seconds/86400),'day']);
      seconds = seconds % 86400;
    }
    if (seconds >= 3600) {
      time.push([Math.floor(seconds/3600),'hour']);
      seconds = seconds % 3600;
    }
    if (seconds >= 60) {
      time.push([Math.floor(seconds/60),'minute']);
      seconds = seconds % 60;
    }  
    if (seconds) {
      time.push([seconds,'second']);
    }
    
    let str = '';
    let len = time.length;
    for (let i = 0; i < len; i++) {
      let template = `${time[i][0]} ${time[i][1]}${time[i][0] > 1 ? 's' : ''}`;
      
      if (i === len - 1 && len > 1) str += ` and ${template}`;
      else if (i === len - 2 || len === 1) str += template;
      else str += `${template}, `;
    }
    
    return str; 
  }