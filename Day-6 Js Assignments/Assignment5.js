
//To find the sum of multiples of 3 and 5
function sum(number) {    
    let sum = 0;   
     for(let i=1; i<=number; i++) {        
      if(i % 3 === 0 && i % 5 === 0)
      {            
        sum += i;        
      }    
    }    
    return sum;
  }
  
  console.log(sum(30)); 
  