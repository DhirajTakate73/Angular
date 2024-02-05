

// function defination
function Addition(arr : number[]) : number
{
    var sum : number = 0;
    var i : number = 0;
    for(i = 0; i< arr.length; i++)
    {
        sum  = sum + arr[i];
    }
    return sum;
}

var marks : number[] = [67,89,77,90,88];

var result : number = 0;
result = Addition(marks);       // function call
console.log("Addition is : "+result);