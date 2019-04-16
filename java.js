var x = 7;
var data = 10;
console.log(x+data);

var numArray = [1,2,3,4,5,6];
var x = 7;

console.log(numArray.length);
function addNumbersInArr(numArr){
    for (var i = 0; i < numArr.length; i++){
        console.log(x+numArr[i]);
    }
}

addNumbersInArr(numArray);

function addNumbers(x,y){
    return (x+y)
}
console.log(addNumbers(3,4));