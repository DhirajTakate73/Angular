
function percentage (marks : number, outof : number = 100) : number
{
    var result : number = 0;
    result = ((marks / outof) * 100);
    return result;
}

var ans : number = 0;

ans  = percentage(89,200);      // positional argument
console.log("percentage is : "+ans);

ans  = percentage(89);          // default argument
console.log("percentage is : "+ans);        