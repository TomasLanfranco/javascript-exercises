const palindromes = function (str) {
    let filteredArray = Array.from(str.toLowerCase().matchAll(/[0-9a-z]?/g));
    let filteredString = filteredArray.join("");
    let reversedString = filteredArray.reverse().join("");
    return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
