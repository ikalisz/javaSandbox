 let = arr1 = [1,2,3,4,5]

let addOne = arr1.forEach(function(val,i,arr){
    arr[i] = val + 1
    // console.log(arr[i])
    return arr
})

//forEach loops through an array and excutes the function for each item in the array

let names = ['Suzie', 'Ben', 'Mark', 'Franklin']

let shortNames = names.filter(function(val, i, arr){
    return val.length < 5
})
// console.log(shortNames)
//.filter goes through the array and returns a new array based on what returns true due to the criteria set by the function
let obj = {
    name: 'Joseph',
    user: 'joe.smith',
    age: 26
}

var obj2 = Object.assign({}, obj)
console.log(obj2)
//Object.assign(obj recieving, obj copying from) copies the object(s) from the right and puts them on the left object.
for (let prop in obj) {
    console.log(obj[prop])
}
/* for in loops loop through an object or an array and for each item execute code assigning it to the variable at
the start of the condition */