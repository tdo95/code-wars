var capitals = function (word) {
    return [...word].reduce((arr, letter, index) => {
      if (letter === letter.toUpperCase()) {
        arr.push(index);
      }
      return arr;
    }, [])
  };