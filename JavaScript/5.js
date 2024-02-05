/*
    write a typescript program which contains one function named as fibonacci.
    that function accept one number from user and print Fibonacci series till that number
    Input : 21
    Ouput : 1 1 2 3 5 8 13 21
*/
function Fibonacci(value1) {
    var first = 0;
    var second = 1;
    var next = 0;
    console.log("Fibonacci series till 21 : ");
    while (first <= value1) {
        console.log(first + "\t");
        next = first + second;
        first = second;
        second = next;
    }
}
var no1 = 21;
Fibonacci(no1);
