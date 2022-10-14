// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    console.log(strA)
    console.log(strB)

    if(strA.length !== strB.length) {
        return false;
    } else {
        for(i=0; i<strA.length-1; i++) {
            for(j=0; j<strB.length-1; j++) {
                if(strA[i] === strB[j]) {
                    strA = strA.slice(0, i) + strA.slice(i+1)
                    console.log(strA)
                    strB = strB.slice(0, j) + strB.slice(j+1)
                    console.log(strB)
                }
            }
        }


    }

};
