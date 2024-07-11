const reverseString = function(word) {
    let stack = [];
    let nextCharIndex = word.length;
    
    while (nextCharIndex >= 0) {
        stack.push(word[nextCharIndex]);
        nextCharIndex--;
    } 
    return stack.join('');
};

// Do not edit below this line
module.exports = reverseString;
