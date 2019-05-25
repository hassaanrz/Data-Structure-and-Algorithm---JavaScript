function selectionSort(arr) {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let ind = i;
    for(let j = i+1; j < len; j++) {
      if(arr[ind] > arr[j]) {
        ind = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[ind];
    arr[ind] = temp;
  }
  return arr;
}

//const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = [9,8,7,6,5,4,3,2,1,0]; 
console.log(selectionSort(arr));



