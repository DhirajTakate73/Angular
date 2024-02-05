function display() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log("Number of elements are : " + data.length);
}
display();
display(11, 21, 51);
display(11, 21, 51, 111);
display(10, 20, 30.40, 50);
