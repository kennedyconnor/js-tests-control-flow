//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    // you code below
    if (num1 > num2) { return num1; }
    else return num2;
    // you code above
}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    // you code below
    let gradePercent = (score / possible) * 100;
    var gradeLetter = 'F';
    switch (true) {
        case gradePercent >= 90:
            gradeLetter = 'A';
            break;
        case gradePercent >= 80:
            gradeLetter = 'B';
            break;
        case gradePercent >= 70:
            gradeLetter = 'C';
            break;
        case gradePercent >= 60:
            gradeLetter = 'D';
            break;

    }
    return gradeLetter;

    // you code above
}


// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
    // you code below

    switch (true) {
        case hour >= 5 && hour <= 11:
            return 'good morning';
            break;
        case hour >= 12 && hour <= 17:
            return 'good afternoon';
            break;
        case hour >= 18 && hour <= 21:
            return 'good evening';
            break;
        case hour < 5 || hour > 21:
            return 'Good Night';
            break;
    }
    // you code above
}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function fever(temp) {
    var message = "no fever"
    if (temp > 98.6) {
        message = 'fever';
    }
    if (temp >= 103) {
        message = message.concat(' go to hospital');
        console.log(message)
    }
    return message;
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
    // you code below
    return !car.moving;
    // you code above
}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
    // you code below
    return (dish.yourDish && dish.isDirty)
    // you code above
}

//7. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
    //***hint: use the find method***
    // you code below




    // you code above

}

