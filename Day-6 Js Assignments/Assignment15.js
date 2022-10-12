//first Array
var arr_1=[3,5,22,5,7,2,45,75,89,21,2]
let value1=0;
for(let i=0;i<arr_1.length;i++){
     value1 +=arr_1[i];
}

//second array
console.log(value1);
var arr_2=[9,2,42,55,71,22,4,5,90,25,26];
let value2=0;
for(let i=0;i<arr_2.length;i++){
     value2 +=arr_2[i];
}
var value=value1+value2;

//displaying output
console.log(value);