function swap(a,b) {
  return [b,a];
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let pivotIndex = start;
  for(let i = start; i< end; i++) {
    if(arr[i] <= pivot) {
      [arr[i],arr[pivotIndex]] = swap(arr[i],arr[pivotIndex]);
      pivotIndex = pivotIndex + 1;
    }
  }
  [arr[pivotIndex],arr[end]] = swap(arr[pivotIndex],arr[end]);
  return pivotIndex;
}

function quickSort(arr, start, end) {
  if(start < end) {
    let partitionedIndex = partition(arr, start, end);
    quickSort(arr, start, partitionedIndex - 1);
    quickSort(arr, partitionedIndex + 1, end);
  }
}

// const arr = [9,8,7,6,5,4,3,2,1,0]; 
// const arr = [0,1,2,3,4,5,6,7,8,9]; 
const arr = [3,2,5,9,1];
quickSort(arr, 0 , arr.length - 1);
console.log(arr);

// function partition(arr, start, end) {
//   let pivot = arr[end];
//   let pivotIndex = start;
//   for(let i = start; i< end; i++) {
//     if(arr[i] <= pivot) {
//       let temp = arr[i];
//       arr[i] = arr [pivotIndex];
//       arr[pivotIndex] = temp;
//       pivotIndex = pivotIndex + 1;
//     }
//   }
//   let temp = arr[pivotIndex];
//   arr[pivotIndex] = arr [end];
//   arr[end] = temp;
//   return pivotIndex;
// }

// function quickSort(arr, start, end) {
//   if(start < end) {
//     let partitionedIndex = partition(arr, start, end);
//     quickSort(arr, start, partitionedIndex - 1);
//     quickSort(arr, partitionedIndex + 1, end);
//   }
// }

// //let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr = [9,8,7,6,5,4,3,2,1,0]; 
// quickSort(arr, 0 , arr.length - 1);
// console.log(arr);
