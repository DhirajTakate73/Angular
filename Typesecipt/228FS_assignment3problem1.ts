
class Arithematic
{
    public number1 : number;
    public number2 : number;
    
    constructor(A : number, B : number)
    {
        this.number1 = A;
        this.number2 = B;
    }

    Addition() : number
    {
        var ans = 0;
        ans = this.number1 + this.number2;
        return ans;
    }

    Substraction() : number
    {
        var ans : number;
        ans = this.number1 - this.number2;
        return ans;
    }

    Multiplication() : number
    {
        var ans : number;
        ans = this.number1 * this.number2;
        return ans;
    }

    Division() : number
    {
        var ans : number;
        ans = this.number1 / this.number2;
        return ans;
    }

}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(40,20);


console.log("parameters passed to object 1:"+obj1.number1,obj1.number2);
console.log("parameters passed to object 2:"+obj2.number1,obj2.number2);

var result : number;

result = obj1.Addition();
console.log("Addition is : "+result);

result = obj2.Substraction();
console.log("Substraction is : "+result);

result = obj1.Multiplication();
console.log("Multiplication is : "+result);

result = obj2.Division();
console.log("Division is : "+result);


