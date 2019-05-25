function linearSearch(arr, searchItem) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == searchItem) {
      console.log("Match Found at Index :" + i);
      return;
    }
  }
  console.log("Match Not Found");
}

const arr = [1,2,3,4,45,5,7];
linearSearch(arr, 4);