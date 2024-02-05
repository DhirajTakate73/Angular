function percentage(marks, outof) {
    var result = 0;
    result = ((marks / outof) * 100);
    return result;
}
var ans = 0;
ans = percentage(77, 100);
console.log("percentage is : " + ans);
