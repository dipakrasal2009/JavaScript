var Demo = /** @class */ (function () {
    function Demo() {
    }
    //Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display Functio Of Demo Class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
