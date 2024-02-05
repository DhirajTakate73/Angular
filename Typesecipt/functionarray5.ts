// to use in every program format (better code)

function demo() : string[]
{
    var languages : string[] = ["c","c++","java","python","typescript"];       // array creation
    return languages;
}

var arr : string[];
arr = demo();

console.log("Elements of array are : ");
var i : number = 0;

for(i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}