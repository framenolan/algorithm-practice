// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) { 
    const newArr = [];
    
    function sort() {
        
        if(arr1.length === 0 && arr2.length === 0) {
            console.log(newArr)
            return newArr;
        } else if(arr1.length === 0) {
            for(i=0; i<arr2.length; i++) {
                newArr.push(arr2[i])
            }
            console.log(newArr)
            return newArr;
        } else if(arr2.length === 0) {
            for(i=0; i<arr1.length; i++) {
                newArr.push(arr1[i])
            }
            console.log(newArr)
            return newArr;
        } else {
            if(arr1[0] <= arr2[0]) {
                newArr.push(arr1[0]);
                arr1.splice(0,1);
                sort();
            } else if (arr1[0] > arr2[0]) {
                newArr.push(arr2[0]);
                arr2.splice(0,1);
                sort();
            }
        }
        
    }
    
    sort();
};

