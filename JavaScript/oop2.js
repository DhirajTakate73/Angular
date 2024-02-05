var Demo // user defined class 
 = /** @class */ (function () {
    function Demo() {
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside display function of demo class");
    };
    return Demo;
}()); // Encapsulation
var obj = new Demo(); // object creation to access members of class 
obj.Display();
