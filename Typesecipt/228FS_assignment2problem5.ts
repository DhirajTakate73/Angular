/*
write a typescript program which contains one function named as chkstring.
that function accept one string and check whether that string contains "marvellous" word or not.

Input : "pune kothrud marvellous infosystems"
Output : string contains marvellous in it
*/

var chkstring = (inputString: string): boolean => {
    // Case-insensitive check for the presence of the word "marvellous"
    return inputString.toLowerCase().includes("marvellous");
};

// Example usage
var stringtotest = "pune kothrud marvellous infosystems";
var containsMarvellous = chkstring(stringtotest);

if (containsMarvellous) {
    console.log(`The string "${stringtotest}" contains the word "marvellous".`);
} else {
    console.log(`The string "${stringtotest}" does not contain the word "marvellous".`);
}