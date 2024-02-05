var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.number1 = A;
        this.number2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var ans = 0;
        ans = this.number1 + this.number2;
        return ans;
    };
    Arithematic.prototype.Substraction = function () {
        var ans;
        ans = this.number1 - this.number2;
        return ans;
    };
    Arithematic.prototype.Multiplication = function () {
        var ans;
        ans = this.number1 * this.number2;
        return ans;
    };
    Arithematic.prototype.Division = function () {
        var ans;
        ans = this.number1 / this.number2;
        return ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var obj2 = new Arithematic(40, 20);
console.log("object 1 values:" + obj1.number1, obj1.number2);
console.log("object 2 values:" + obj2.number1, obj2.number2);
var result;
result = obj1.Addition();
console.log("Addition is : " + result);
result = obj2.Substraction();
console.log("Substraction is : " + result);
result = obj1.Multiplication();
console.log("Multiplication is : " + result);
result = obj2.Division();
console.log("Division is : " + result);
