
function displaytime(division : string) : void
{
    if(division == "A")
    {
        console.log("your exam is at 7 AM...");
    }
    else if (division == "B")
    {
        console.log("your exam is at 8 AM...");
    }
    else if (division == "C")
    {
        console.log("your exam is at 9 AM...");
    }
    else if(division == "D")
    {
        console.log("your exam is at 10 AM...");
    }
    else
    {
        console.log("wrong input, division should be either A,B,C,D");
    }
}

var value : string = "C";

displaytime(value);