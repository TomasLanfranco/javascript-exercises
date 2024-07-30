const fibonacci = function(n) {
    if (typeof n == "string") {
        n = parseInt(n);
    }
    if (n < 0) {
        return "OOPS";
    }

    if (n === 0) return n;
    if (n === 1) return 1;

    let firstOperand = 0;
    let secondOperand = 1;
    let result;
    for (let i = 1; i < n; i++) {
        result = firstOperand + secondOperand;
        firstOperand = secondOperand;
        secondOperand = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
