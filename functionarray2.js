// function defination
function Addition(Arr) {
    console.log("Element of arrau=y are ; ");
    var i = 0;
    var sum = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var Marks = [77, 99, 51, 79, 61];
var result = 0;
//function call
result = Addition(Marks);
console.log("Addition is : " + result);
