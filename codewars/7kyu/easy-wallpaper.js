function wallpaper(l, w, h) {
    //Lateral surface area, should be zero if any values are zero
    let surfaceArea = l === 0 || w === 0 || h === 0 ? 0 : (h * ((2 * w) + (2 * l)));
    let rollArea = 10  * 0.52;
    
    let result = surfaceArea / rollArea;
    
    //15% length increase
    result += result * 0.15;
    
    return numbers[Math.ceil(result)];
  }