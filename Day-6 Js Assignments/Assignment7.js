/* write a program to print 

# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #
# # # # # # # # # #

*/

let n = 10; 
let string = "";

for(let i = 1; i <= n; i++) { 
  for(let j = 1; j <=n; j++) { 
    string += "# ";
  }
  
  string += "\n";
}

console.log(string);