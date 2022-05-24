function transpose(song, interval){
    let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    return song.map(x => {
      let index;
      if(notes.includes(x)) index = notes.indexOf(x);
      else index = notes.indexOf(x[0]) - 1;
      
      let amtShifted = index + interval
      return interval > 0 ? notes[amtShifted % notes.length] : notes[amtShifted] || notes[notes.length - Math.abs(amtShifted)];
    })
  }