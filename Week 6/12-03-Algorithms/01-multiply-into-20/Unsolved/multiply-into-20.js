const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here

  
  for(i=0; i<arr.length-1; i++) {

    for(j=(i+1); j<arr.length; j++) {

      if(arr[i] * arr[j] === 20) {
        return true;
      }

    }
    
  }

  return false;

};

