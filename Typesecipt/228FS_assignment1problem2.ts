/*
    Write a typescript program which contains one function named as area.
    that function should calculate area of circle. accept value of radius from user and return its area.
    default value of PI should be 3.14 if it is not provided by caller.
    input : 5
    output : area of circle is 78.5.
*/

function CircleArea(value1 : number, value2 : number) : number
{
    var Area : number = 0;
    Area = value1 * value2 * value2;        // Area of circle is (A=πr2)
    return Area;
    
}

var PI : number = 3.14;
var radius : number = 5;
var result : number = 0;

result = CircleArea(PI,radius);
console.log("Area of circle is : "+result);

