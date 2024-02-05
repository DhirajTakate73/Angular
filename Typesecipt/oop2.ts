class Demo      // user defined class 
{
    // characteristics 
    no1 : number;
    no2 : number;

    // Behaviour
    Display()
    {
        console.log("Inside display function of demo class...");
    }

}   // Encapsulation

var obj = new Demo();       // object creation to access members of class 

obj.Display();