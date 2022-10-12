//for multiples of 3 prints fizz;
//for multiples of 5 prints Buzz;
//for multiples of 3 & 5 prints fizzBuzz;

for(var i=1;i<=100;i++)
    {
        if ((i % 3 == 0)&&(i % 5 == 0)){
            console.log(i+':'+'fizzBuzz');
        }    
        else if(i % 3 == 0)
        {
            console.log(i+':'+'fizz');
        }
        else if(i % 5 == 0)
        {
            console.log(i+':'+'buzz');

        }
    }