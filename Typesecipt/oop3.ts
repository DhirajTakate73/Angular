class Demo      // user defined class 
{
    // characteristics 
    no1 : number;
    no2 : number;

    constructor()       // default constructor
    {
        console.log("Inside Default constructor...");
        this.no1 = 0;
        this.no2 = 0;
    }
    // Behaviour
    Display()
    {
        console.log("Inside display function of demo class...");
    }

}   // Encapsulation

var obj = new Demo();       // object creation to access members of class 

obj.Display();
console.log(obj.no1);
console.log(obj.no2);