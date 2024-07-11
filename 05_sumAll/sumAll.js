const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number' || b < 0 || a < 0) {
        return 'ERROR';   
    }

    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
