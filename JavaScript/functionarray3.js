function demo() {
    return new Array(10, 20, 30, 40);
}
var arr = demo();
console.log("Elements of array are : ");
var i = 0;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
