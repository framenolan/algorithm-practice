// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let playTime = 0;
  let songCount = 0;

  // Fringe Case
  if(arr.length === 0) {
    return 0;
  }

  // Select Sort Lowest to Highest
  for(i=0; i<arr.length; i++) {
    let lowest = i;

    for(j=i+1; j<arr.length; j++) {
      if(arr[j]<arr[lowest]) {
        lowest = j;
      }
    }

    if(lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
    console.log(arr);
  }

  // playTime Sum Loop
  for(i=0; i<arr.length; i++) {
    if (i === arr.length-1 && playTime < 60) {
      return arr.length; 
    } else if(playTime < 60) {
      playTime = arr[i] + playTime;
      songCount++
    } else {
      playTime = playTime - arr[i];
      songCount = songCount-1;
      return songCount;
    }
  }
};
