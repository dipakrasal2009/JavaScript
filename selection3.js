function DisplayExamTime(Division) {
    if (Division == 'A') {
        console.log("your exam is at 7 AM");
    }
    else if (Division == 'B') {
        console.log("your exam is at 8 AM");
    }
    else if (Division == 'C') {
        console.log("your exam is at 9 AM");
    }
    else if (Division == 'D') {
        console.log("your exam is at 10 AM");
    }
    else {
        console.log("Wrong inpute it sheduld be ithear A,B,C,D");
    }
}
var value = "C";
DisplayExamTime(value);
