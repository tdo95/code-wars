String.prototype.isUpperCase = function() {
    return !([...this].find(x => x === x.toLowerCase() && x.toLowerCase() !== x.toUpperCase()));     
}