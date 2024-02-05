

// function defination
function display(arr : number[]) : void
{
    var i : number = 0;
    for(i = 0; i< arr.length; i++)
    {
        console.log(arr[i]);
    }
}

var marks : number[] = [67,89,77,90,88];

// function call
display(marks);