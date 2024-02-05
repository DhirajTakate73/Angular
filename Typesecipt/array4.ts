

var marks : number[] = [11,21,51,101,111];

console.log("number of elements in the array are : "+marks.length);     //.length is a property and + is used for concatenation.

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

var i : number = 0;
for(i = 0; i < marks.length; i++)
{
    console.log(marks[i]);          // marks[0,1,2,3,4];
}