function CheckEven(No) {
    if (No % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var value = 10;
var result;
result = CheckEven(value);
if (result == true) {
    console.log("It is even number");
}
else {
    console.log("It is odd number");
}
