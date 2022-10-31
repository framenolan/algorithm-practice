// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    console.log(str.charAt(0))

    let arr1 = str.split(" ");
    let arr2 = [];
    console.log(arr1);

    for(i=0; i<arr1.length; i++) {
        let result = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
        console.log(result);
        arr2.push(result)
    }

    console.log(arr1)
    console.log(arr2)

    return arr2.join(" ");
};
