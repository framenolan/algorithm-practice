// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {

    if(num === 0) {
        return true;
    } else if(num < 0) {
        return false;
    } else {
        for(i=1; i<=num; i++) {
            let rootTest = num / i;
            
            if(rootTest === i) {
                return true;
            } else if(i === num) {
                return false;
            }
        };   
    }
}