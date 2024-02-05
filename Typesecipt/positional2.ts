
function percentage (marks : number, outof : number) : number
{
    var result : number = 0;
    result = ((marks / outof) * 100);
    return result;
}

var ans : number = 0;

ans  = percentage(89,200);
console.log("percentage is : "+ans);