var Demo // user defined class 
 = /** @class */ (function () {
    function Demo() {
        console.log("Inside Default constructor...");
        this.no1 = 0;
        this.no2 = 0;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside display function of demo class...");
    };
    return Demo;
}()); // Encapsulation
var obj = new Demo(); // object creation to access members of class 
obj.Display();
console.log(obj.no1);
console.log(obj.no2);
