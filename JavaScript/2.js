var Circle = /** @class */ (function () {
    function Circle(A) {
        this.pi = 3.14;
        this.radius = A;
    }
    Circle.prototype.Area = function () {
        var A = 0;
        A = this.pi * this.radius * this.radius;
        return A;
    };
    return Circle;
}());
var obj1 = new Circle(5);
var obj2 = new Circle(12);
console.log("value of radius passed to object 1 :" + obj1.radius);
console.log("value of radius passed to object 2 :" + obj2.radius);
var ret;
ret = obj1.Area();
console.log("Area of circle is : cm^2" + ret);
ret = obj2.Area();
console.log("Area of circle is : cm^2" + ret);
