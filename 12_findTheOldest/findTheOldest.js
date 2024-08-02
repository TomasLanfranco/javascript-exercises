const findTheOldest = function(peopleArray) {
    
    return peopleArray
    .reduce(((oldestPerson, currentPerson) => comparePerson(oldestPerson, currentPerson)));
};

const comparePerson = function(personA, personB) {
    let ageOfPersonA = getAge(personA);
    let ageOfPersonB = getAge(personB);

    return ageOfPersonA > ageOfPersonB ? personA : personB;
}

const getAge = function(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    }

    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
