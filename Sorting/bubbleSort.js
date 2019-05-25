function bubbleSort(arr) {
  let len = arr.length;
  for(let round = 1; round < len; round++) {
    for(let j = 0; j < len - round; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const arr = [9,8,7,6,5,4,3,2,1,0]; 
//const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(bubbleSort(arr));



