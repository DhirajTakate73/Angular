/*
    write a typescript program which contains one arrow function named as ChkArmstrong. 
    that function accepts one numbers and check whether number is armstrong number or not.

    Input : 153
    Output : it is armstrong number
*/




var ChkArmstrong = (num: number): boolean => {
    // Function to calculate the power of a number
    var power = (base: number, exponent: number): number => {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    };

    // Convert the number to an array of digits
    var digits = num.toString().split('').map(Number);

    // Calculate the sum of the nth powers of each digit
    var sum = digits.reduce((acc, digit) => acc + power(digit, digits.length), 0);

    // Check if the sum is equal to the original number
    return sum === num;
};

// Example usage
var numberToCheck : number = 153;
var isArmstrong = ChkArmstrong(numberToCheck);

if (isArmstrong) {
    console.log(`${numberToCheck} is an Armstrong number.`);
} else {
    console.log(`${numberToCheck} is not an Armstrong number.`);
}