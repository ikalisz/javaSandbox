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

//you can add properties and values to objects with dot notation
var myFavorites = {
    color: 'green',
    food: 'sushi',
    number: 7
}
//console.log(myFavorites)

//the code below adds the property iceCream to the list with the value of coffee
myFavorites.iceCream = 'coffee'
//console.log(myFavorites)
