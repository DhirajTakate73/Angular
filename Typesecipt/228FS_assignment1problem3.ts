/*
    write a typescript program which contains one function named as DisplayFactors
    that funtion should accept one number and display factors of that number.
    input : 20
    output : 1 2 4 5 10
*/

function DisplayFactors(value1 : number) : void
{
    console.log("Factors Are : ");
   var cnt : number = 0;
   for(cnt = 1; cnt < 20; cnt++)
   {
    if(value1 % cnt == 0)
    {
        console.log(cnt+"\t");
    }
   }
}

var NO1 : number = 20;

DisplayFactors(NO1);
