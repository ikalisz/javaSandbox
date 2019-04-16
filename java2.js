var password = 'password'
var confirmPassword = 'password'
if (password === confirmPassword) {
    console.log('passwords match')
} else {
    console.log('passwords do not match')
}

// === does not equal ==
var userId = 26
var id = '26'
// == is not strict, looks for value instead of data type
//== will return if, === will return else statement
if (+userId == +id) {
    console.log('we have found the user we want')
    var found = true
} else {
    console.log('the id we have does not match the user id')
    var found = false
}
