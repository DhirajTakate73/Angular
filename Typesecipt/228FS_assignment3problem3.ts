class Circle
{
    public radius : number;
    public pi : number = 3.14;
    
    constructor(A : number)
    {
        this.radius = A;
    }
    Area() : number
    {
        var A = 0;
        A = this.pi * this.radius * this.radius;
        return A;
    }

}
class Circlex extends Circle
{
    Circumference() : number
    {
        var C : number = 0;
        C = 2 * this.pi * this.radius;
        return C;
    }
}
var obj1 = new Circlex(5);
var obj2 = new Circle(8);

console.log("value of radius passed to object 1 :"+obj1.radius);
console.log("value of radius passed to object 2 :"+obj2.radius);

var ret : number;

ret = obj1.Circumference();
console.log("Circumference of circle is : "+ret);

ret = obj2.Area();
console.log("Area of circle is : "+ret);


