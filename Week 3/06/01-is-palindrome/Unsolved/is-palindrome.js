// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let arr1 = str.split("");
    let arr2 = [];
    
    for(i=arr1.length-1; i>=0; i--) {
        if(arr2.length === 0){
            arr2 = [arr1[i]]
        } else {
            arr2.push(arr1[i])
        }
    };

    let str2 = arr2.join("");

    if(str2 === str) {
        return true
    } else {
        return false
    }

};
