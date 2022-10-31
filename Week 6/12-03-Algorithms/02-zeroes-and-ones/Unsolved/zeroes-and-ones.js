// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    let count0 = 0;
    let count1 = 0;

    for(i=0; i<str.length; i++) {
        
        if(str[i] === "0") {
            count0 = count0 +1;
        } else if (str[i] === "1") {
            count1 = count1 +1;
        }
    }

    if(count0 === count1) {
        return true;
    } else {
        return false;
    }

};
