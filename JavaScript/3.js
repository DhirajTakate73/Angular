var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circlex.prototype.Circumference = function () {
        var C = 0;
        C = 2 * this.pi * this.radius;
        return C;
    };
    return Circlex;
}(Circle));
var obj1 = new Circlex(5);
var obj2 = new Circle(8);
console.log("value of radius passed to object 1 :" + obj1.radius);
console.log("value of radius passed to object 2 :" + obj2.radius);
var ret;
ret = obj1.Circumference();
console.log("Circumference of circle is : " + ret);
ret = obj2.Area();
console.log("Area of circle is : " + ret);
