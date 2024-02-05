// function defination
function Addition(arr) {
    var sum = 0;
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var marks = [67, 89, 77, 90, 88];
// function call
var result = 0;
result = Addition(marks);
console.log("Addition is : " + result);
