// pop
function Addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
function Substraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
var value1 = 11;
var value2 = 10;
var result = 0;
result = Addition(value1, value2);
console.log("Addition is : " + result);
result = Substraction(value1, value2);
console.log("Substraction is : " + result);
