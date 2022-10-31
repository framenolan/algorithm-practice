// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    const strArray = str.split("");
    let count = 0

    for(i=0; i<strArray.length; i++){
        if(strArray[i] === "a" | strArray[i] === "e" |strArray[i] === "i" |strArray[i] === "o" | strArray[i] === "u"
        | strArray[i] === "A" | strArray[i] === "E" |strArray[i] === "I" |strArray[i] === "O" | strArray[i] === "U") {
            count = count + 1
        }
    }

    return count
};
