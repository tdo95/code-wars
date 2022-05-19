function findDifference(a, b) {
    let aVolume = a.reduce((sum, n) => sum * n, 1);
    let bVolume = b.reduce((sum, n) => sum * n, 1);
    return Math.abs(aVolume - bVolume);
  }