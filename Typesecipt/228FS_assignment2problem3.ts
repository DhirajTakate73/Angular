/*
    write a typescript program which contains one function named as Maximum. 
    that function accepts array of numbers and returns the second largest number from array

    Input : 23 89 6 29 56 45 77 32
    Output : second Maximum number is 77
*/

function SecondMaximum(arr : number[]) : number
{
    var firstmax : number = arr[0];
    var secondmax : number = firstmax;
    var i : number = 0;
    for(i = 0; i< arr.length; i++)
    {
        if(arr[i] > firstmax)
        {
            secondmax = firstmax;
            firstmax = arr[i];
        }
        else if(arr[i] > secondmax && arr[i] !== firstmax)
        {
            secondmax = arr[i];
        }
        
    }
    return secondmax;
}

var elements : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

var result : number = 0;
result = SecondMaximum(elements);       // function call
console.log("Second Maximum number in the array is : "+result);
