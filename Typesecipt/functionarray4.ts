// to use in every program format (better code)

function demo() : number[]
{
    var marks : number[] = [10,20,30,40];       // array creation
    return marks;
}

var arr : number[];
arr = demo();

console.log("Elements of array are : ");
var i : number = 0;

for(i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}