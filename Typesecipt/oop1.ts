// pop

function Addition(no1 : number, no2 : number) : number
{
    var ans : number = 0;
    ans = no1 + no2;
    return ans;
}

function Substraction(no1 : number, no2 : number) : number
{
    var ans : number = 0;
    ans = no1 - no2;
    return ans;
}

var value1 : number = 11;
var value2 : number = 10;
var result : number = 0;

result = Addition(value1, value2);
console.log("Addition is : "+result);

result = Substraction(value1, value2);
console.log("Substraction is : "+result);

