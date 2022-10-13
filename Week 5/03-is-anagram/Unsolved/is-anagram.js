// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    const arrA = strA.split("");
    const arrB = [];
    console.log(arrA)
    console.log(arrB)

    for(i=arrA.length-1; i>=0; i--) {
        arrB.push(arrA[i])

        console.log("arrA i",arrA[i])
        console.log("arrB",arrB)
    }

    const strC = arrB.join("");
    console.log("strC",strC)
    console.log("strB",strB)

    if(strC === strB) {
        return true;
    } else {
        return false;
    }

};
