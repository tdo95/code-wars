
function countPositivesSumNegatives(input) {
    if(!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
        if(n > 0) {
            arr[0] +=1;
            return arr;
        }
        if(n < 0) {
            arr[1] += n;
            return arr;
        } else return arr;
    }, [0,0]);
}