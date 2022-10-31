// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let currentMax = 0
    for(i=0; i<arr.length; i++) {
        if(arr[i]>currentMax) {
            currentMax = arr[i]
        }
    }
    return currentMax
};
