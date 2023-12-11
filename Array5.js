var Marks = [11, 21, 51, 101, 111];
var i = 0;
console.log("Number of element in the array are : " + Marks.length);
console.log("Array using for loop");
for (i = 0; i < Marks.length; i++) {
    console.log(Marks[i]);
}
console.log("Array using while loop");
i = 0;
while (i < Marks.length) {
    console.log(Marks[i]);
    i++;
}
i = 0;
console.log("Array using do while loop");
do {
    console.log(Marks[i]);
    i++;
} while (i < Marks.length);
