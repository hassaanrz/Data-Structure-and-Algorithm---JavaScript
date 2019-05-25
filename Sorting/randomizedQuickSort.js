function random(start, end) {
  let random = Math.floor(Math.random()*(end - start + 1)) + start;
  return random;
}

function swap(a,b) {
  return [b,a];
}

function randomizedPartiton(arr, start, end) {
  let pivotIndex = random(start, end);
  [arr[pivotIndex],arr[end]] = swap(arr[pivotIndex],arr[end]);
  return partition(arr, start, end);
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let pivotIndex = start;
  for(let i = start; i< end; i++) {
    if(arr[i] <= pivot) {
      [arr[i], arr[pivotIndex]] = swap(arr[i], arr[pivotIndex]);
      pivotIndex ++;
    }
  }
  [arr[pivotIndex], arr[end]] = swap(arr[pivotIndex], arr[end]);
  return pivotIndex;
}

function randomizedQuickSort(arr, start, end) {
  if(start < end) {
    let partitionIndex = randomizedPartiton(arr, start, end);
    randomizedQuickSort(arr, start, partitionIndex - 1);
    randomizedQuickSort(arr, partitionIndex + 1, end);
  }
}

// const arr = [0,1,2,3,4,5,6,7,8,9]; 
// const arr = [9,8,7,6,5,4,3,2,1];
const arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
randomizedQuickSort(arr, 0, arr.length - 1);
console.log(arr); 