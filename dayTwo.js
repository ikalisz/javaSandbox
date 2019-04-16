// you can unslash code with ctrl (or cmnd on mac) and the backslash key
//uncomment any of the console.logs to see how the code works

var password = 'password'
var confirmPassword = 'password'
if (password === confirmPassword) {
    //console.log('passwords match')
} else {
    //console.log('passwords do not match')
}

// === does not equal ==
// var userId = 26
// var id = '26'
// == is not strict, looks for value instead of data type
//== will return if, === will return else statement
//!= acts the same as ==, !== acts the same as === however check if the value or data type is not true

// if (+userId == +id) {
//     console.log('we have found the user we want')
//     var found = true
// } else {
//     console.log('the id we have does not match the user id')
//     var found = false
// }

// || an or statement, one can be true
// && and statement, all have to be true

var hasDriversLicense = true
var age = 36

if (age >= 26 && hasDriversLicense) {
   // console.log('you can rent a car with us')
} else {
   // console.log('you can\'t rent a car with us')
}

//you can add/change/access properties and values to objects with dot notation
var myFavorites = {
    color: 'green',
    food: 'sushi',
    number: 7
}
//console.log(myFavorites)

//the code below adds the property iceCream to the list with the value of coffee
myFavorites.iceCream = 'coffee'
//console.log(myFavorites)
var food = 'food'

// console.log('my favorite food is ' + myFavorites['food'])

var chameleon = {
    color: 'red',
    texture: 'scaly'
}
// console.log(chameleon.color)
function changeColor(color,newColor) {
    return chameleon['color'] = newColor
}
// console.log(changeColor('color','purple'))

//you can access props of objects without knowing what the value is and aren't super useful yet.
function carMaker(doors) {
    return {
        wheels: 4,
        doors: doors
    }
}
var coupe = carMaker(2)

var sedan = carMaker(4)

// console.log(coupe.doors)
// console.log(coupe.wheels)
// console.log(sedan.doors)
// console.log(sedan.wheels)
// console.log(coupe)
// console.log(sedan)
//you can create objects in functions
numArr = [1,3,6,8]
function addingLoop(numArr){
    for (var i = 0; i < numArr.length; i++) {
        console.log(+numArr[i] ++)
    }
}
addingLoop(numArr)
//above doesnt work yet
var oddNums = []
var evenNums = []
function findingEvens(numArr) {
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2) {
            oddNums.push(numArr[i])
        } else {
            evenNums.push(numArr[i])
        }
    }
}
findingEvens(numArr)
// console.log(evenNums)
// console.log(oddNums)

//this is a basic even/odd sorter