/*
    write a typescript program which contains one function named as maximum.
    that function accepts array of numbers and returns the largest number from array
    Input : 23 89 6 29 56 45 77 32
    Output : Maximum number is 89
*/


// function defination
function maximum(arr : number[]) : number
{
    var max : number = arr[0];
    var i : number = 0;
    for(i = 0; i< arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}

var elements : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

var result : number = 0;
result = maximum(elements);       // function call
console.log("Largest number in the array is : "+result);



