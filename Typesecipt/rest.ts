
// rest arguments
function display(...data : number[])        // Ellipse
{
    console.log("Number of elements are : "+data.length);
}

display();
display(11,21,51);
display(11,21,51,111);
display(10,20,30.40,50);