var Demo // user defined class 
 = /** @class */ (function () {
    function Demo(A, B) {
        console.log("Inside Parameterised constructor...");
        this.no1 = A;
        this.no2 = B;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside display function of demo class...");
    };
    return Demo;
}()); // Encapsulation
var obj1 = new Demo(10, 11);
var obj2 = new Demo(20, 21);
console.log(obj1.no1);
console.log(obj1.no2);
console.log(obj2.no1);
console.log(obj2.no2);
