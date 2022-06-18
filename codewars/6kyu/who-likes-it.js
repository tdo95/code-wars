function likes(names) {
    if (names.length === 0) {
      return 'no one likes this';
    } else if (names.length < 3) {
      return `${names.join(' and ')} ${names.length === 1 ? "likes" : "like"} this`
    } else {
      return `${names[0] + ", " + names[1]} and ${names.length === 3 ? names[2] : (names.length - 2) + " others"} like this`
    }
  }