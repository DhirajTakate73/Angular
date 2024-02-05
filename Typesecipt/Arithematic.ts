
class Arithematic
{
    public no1 : number;
    public no2 : number;

    constructor(A : number, B : number)
    {
        this.no1 = A;
        this.no2 = B;
    }

    Addition() : number
    {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    }

    Substraction() : number
    {
        var ans : number;
        ans = this.no1 - this.no2;
        return ans;
    }

}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(25,21);


console.log(obj1.no1);
console.log(obj1.no2);

var result : number;

result = obj1.Addition();
console.log(result);

result = obj2.Substraction();
console.log(result);


