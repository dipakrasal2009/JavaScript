var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var obj2 = new Arithematic(29, 25);
console.log(obj1.No1);
console.log(obj1.No2);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.substraction();
console.log(Result);
