// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    if(arr.length === 0) {
        return true;
    } else {        
        
        for(i=0; i<arr.length; i++) {
            let checkVal = arr[i];
            if (i === (arr.length-1)) {
                return true;
            } else {
                for(let j = (i+1); j<arr.length; j++) {
                    if(arr[j] === checkVal) {
                        return false;
                    } else if (i === arr.length) {
                        return true;
                    }
                }
            }
        }
    }
};
