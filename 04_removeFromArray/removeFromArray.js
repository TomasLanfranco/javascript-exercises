const removeFromArray = function(originalArray, ...elementsToRemove) {
    let newArray = [];
    originalArray.forEach(element => {
        if (!elementsToRemove.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
