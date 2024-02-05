var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.no1 = A;
        this.no2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    };
    Arithematic.prototype.Substraction = function () {
        var ans;
        ans = this.no1 - this.no2;
        return ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var obj2 = new Arithematic(25, 21);
var result;
result = obj1.Addition();
console.log(result);
result = obj2.Substraction();
console.log(result);
