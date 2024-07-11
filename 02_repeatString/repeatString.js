const repeatString = function(string, repetitions) {
    if (repetitions < 0) {
        return 'ERROR';
    }

    let repeatedString = '';
    for (let i = 0; i < repetitions; i++) {
        repeatedString += string;
        
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
