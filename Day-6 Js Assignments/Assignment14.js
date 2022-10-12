// program to check if the string is palindrome or not

function checkPalindrome(string) {
    var len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'is not a palindrome';
        }
    }
    return 'is a palindrome';
}

let str3 ='racecar';
let str4="java";

var value = checkPalindrome(str3);
var value1 = checkPalindrome( str4);
console.log("the first string is:"+value);
console.log("the second string is:"+value1);