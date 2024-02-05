/*
    write a typescript program which contains one function named as ChkPrime
    that funtion should accept one number and it should return true if the given number is prime and otherwise return false.
    input : 11
    output : it is prime number.
*/
function ChkPrime(value1) {
    var cnt = 0;
    if (value1 <= 1) {
        return false;
    }
    for (cnt = 2; cnt * cnt <= value1; cnt++) {
        if (value1 % cnt == 0) {
            return false;
        }
    }
    return true;
}
var NO1 = 11;
var bresult = false;
bresult = ChkPrime(NO1);
if (bresult == true) {
    console.log("Entered number is prime...");
}
else {
    console.log("Entered number is not prime...");
}
