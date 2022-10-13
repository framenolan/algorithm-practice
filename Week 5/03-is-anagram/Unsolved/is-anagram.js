// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    // This is not working, maybe start from scratch
    
    const arrA = strA.split("");
    const arrB = strB.split("");
    let arrC = arrA[0].splice(0, 1);
    console.log("A",arrA)
    console.log("B",arrB)
    console.log("C",arrC)

    function compare(array1, array2) {
        for(i=0; i<array1.length; i++) {
            console.log("for1")
            for(j=0; j<array2.length; j++) {
                console.log("for2")
                console.log("i",i,"j",j)
                if(array1[i] === array2[j]) {
                    console.log("i",i,"j",j)
                    console.log(arrA)
                    console.log(arrB)
                    console.log(array1[i].splice(i, 1));
                    array1[i].splice(i, 1);
                    console.log(array1)
                    array2[j].splice(j,1);
                    console.log(array2)
                } else {
                    console.log("else2")
                }
            }
        }
    }

    if(arrA.length !== arrB.length) {
        return false;
    } else {
        console.log("else")
        compare(arrA, arrB);
        console.log("A",arrA)
        console.log("B",arrB)
    }

};
