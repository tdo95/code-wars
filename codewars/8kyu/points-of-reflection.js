function symmetricPoint(p, q) {
    let distanceBetweenPQ = [q[0] - p[0], q[1] - p[1]];
    return [distanceBetweenPQ[0] + q[0], distanceBetweenPQ[1] + q[1]]
  }