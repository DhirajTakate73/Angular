// to use in every program format (better code)
function demo() {
    var languages = ["c", "c++", "java", "python", "typescript"]; // array creation
    return languages;
}
var arr;
arr = demo();
console.log("Elements of array are : ");
var i = 0;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
