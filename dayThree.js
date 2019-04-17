//whiteboarding
//Wrtie a function that takes in a number.
    //if the number is divisible by three, return 'fizz'
    //if the number is divisible by five, return 'buzz'
    //if the number is divisible by five and three, return 'fizz buzz'
    //if the number is not divisible by three or five, return the number

//Step One: Clarify the question

//Step Two: Create sample data
    //5 => 'buzz'
    //3 => 'fizz'
    //15 => 'fizz buzz'

//Step Three: Define code constructs aka define what code you want to use
    //function
    //if/else statement
    //modules => %

//Step Four: Psuedo Code, write steps you will take to solve
    // write a function that takes in parameter number
    // use an if else statement to check if number is divisible by 3 or 5 with no remainder
    //function will return statements based on if number is divisible by 3 or 5

//Step Five: Code
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizz buzz'
    } else if (num % 3 === 0) {
        return 'fizz'
    } else if (num % 5 === 0) {
        return 'buzz'
    } else {
        return num
    }
}
// console.log(fizzBuzz(15))

// for loops for (start point, end point, addition)

let placesVisited = ['Hawaii', 'Thailand', 'Greece', 'Belize']

for (let i = 0; i < placesVisited.length; i++) {
    // console.log(`I have visited ${placesVisited[i]}`)
}

function checkLocation(location) {
    for (let i = 0; i < placesVisited.length; i++) {
        if (location === placesVisited.indexOf(location)) {
            console.log('1')
            return `I have visited ${location}`
        } else {
            console.log('0')
            return `I need to visit ${location}`
        }
    }
}
checkLocation('Denver')