// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let currentTotal = 0;

    for(i=0; i<arr.length; i++){
        currentTotal = currentTotal + arr[i]
    }

    return currentTotal
};
