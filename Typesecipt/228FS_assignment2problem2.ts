/*
    write a typescript program which contains one function named as summation.
    that function accepts array of numbers and returns the summation of all elements of array
    Input : 23 6 7 4 5 7
    Output : addition is 52
*/


// function defination
function summation(arr : number[]) : number
{
    var sum : number = 0;
    var i : number = 0;
    for(i = 0; i< arr.length; i++)
    {
        sum  = sum + arr[i];
    }
    return sum;
}

var marks : number[] = [23,6,7,4,5,7];

var result : number = 0;
result = summation(marks);       // function call
console.log("Addition is : "+result);


