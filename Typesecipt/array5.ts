

var marks : number[] = [11,21,51,101,111];

console.log("Array traversal using for loop : ");     //.length is a property and + is used for concatenation.

var i : number = 0;
for(i = 0; i < marks.length; i++)
{
    console.log(marks[i]);          // marks[0,1,2,3,4]
}

console.log("Array traversal using while loop : ");     //.length is a property and + is used for concatenation.
i = 0;
while(i < marks.length)
{
    console.log(marks[i]);
    i++;
}

console.log("Array traversal using do while loop : ");     //.length is a property and + is used for concatenation.
i = 0;
do
{
    console.log(marks[i]);
    i++;
}while(i < marks.length)



