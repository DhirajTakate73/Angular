function Addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
var result = 0;
result = Addition(10, 11);
console.log("Addition is : " + result);
var fun = function (no1, no2) { return no1 + no2; }; // => no1 + no2; function body      // prototype of lambda function
//  fun la temporary fun asa nav dil paan actual madhye fun la nav nahi fakt olkakhnyasa=thi nav dil (=> operator compulsory lambda function sathi)                                         
result = fun(10, 11);
console.log("Addition is : " + result);
console.log(typeof fun);
