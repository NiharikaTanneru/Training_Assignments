// Calculating the average marks of the students
var Marks=[80,77,88,95,68];

var sum=0;

for(var i=0;i<Marks.length;i++)
{
   sum+=Marks[i];
   var avg=sum/Marks.length;
}
let total= console.log("Total average is:"+avg);

if (avg < 60){
    console.log("Grade : F");      
    } 
  else if (avg < 70) {
          console.log("Grade : D"); 
            } 
  else if (avg < 80) 
       {
          console.log("Grade : C"); 
  } else if (avg < 90) {
          console.log("Grade : B"); 
  } else if (avg < 100) {
          console.log("Grade : A"); 
}

