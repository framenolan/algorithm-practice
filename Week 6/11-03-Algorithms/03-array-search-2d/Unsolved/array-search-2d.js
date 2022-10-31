// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    let count = 0;

    for(i=0; i<arr.length; i++) {

        let innerLength = arr[i].length;

        for(j=0; j<innerLength; j++) {
            if(arr[i][j] === "X") {
                count = count +1;
            }
        }
    }
    
    return count;
};
