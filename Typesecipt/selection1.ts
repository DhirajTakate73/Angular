
function CheckEven (no : number) : void
{
    if((no % 2) == 0)
    {
        console.log("it is even number");
    }
    else
    {
        console.log("it is odd number");
    }

    var value1 : number = 11;
    var value2 : number = 10;

    CheckEven(value1);
    CheckEven(value2);

}