function checkeven(no : number) : boolean
{
    if((no % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

    var value : number = 11;
    var result : boolean;

    result = checkeven(value);
    if(result == true)
    {
        console.log("it is even number");
    }
    else
    {
        console.log("it is odd number");
    }
}

// sequence by using if else conditions