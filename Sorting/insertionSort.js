function insertionSort(arr) {
  let len = arr.length,i,j;
  for(i = 1; i < len; i++) {
    let temp = arr[i];
    for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

const arr = [9,8,7,6,5,4,3,2,1,0]; 
//const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(insertionSort(arr));
