// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let total = num

    if(num === 0) {
        return 1;
    } else {

        for(let i=num-1; i>=1; i--) {         
            total = total * i;
        }
    }

    return total;
};
