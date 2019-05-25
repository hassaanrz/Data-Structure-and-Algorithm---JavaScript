function binarySearch(arr, searchItem) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == searchItem) {
      console.log("Match Found at Index :" + mid);
      return;
    } else if (arr[mid] > searchItem) end = mid - 1;
    else if (arr[mid] < searchItem) start = mid + 1;
  }
  console.log("Match Not Found");
}

const arr = [0,1,2,3,4,5,6,7,8,9];
binarySearch(arr, 4);
