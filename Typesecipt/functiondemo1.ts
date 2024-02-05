

        function addition( value1 : number, value2 : number) : number
        {
            var result : number = 0;
            result = value1 + value2;
            return result;
        }

        var no1 : number = 11;      // execution will start from this line
        var no2 : number = 10;
        var ans : number = 0;

        ans = addition(no1, no2);

        console.log("\nAddition is : "+ans);

        // by using function we can achieve reusablity in program