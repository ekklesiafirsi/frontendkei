// 1. Calculate age and retirement
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
    const age = calculateAge(object.year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${object.firstName} retires in ${retirement} years`);
    } else {
        console.log(`${object.firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Add numbers
const addNumber = (...numbers) => {
    let sum = numbers.reduce((acc, i) => acc + i, 0);
    return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Calculate area
const phi = 3.14;

const calculateArea = (obj) => {
    return phi * Math.pow(obj.radius, obj.power);
};

let radius = 21;
const area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius: radius, power: 2 });
