function swap(a, b) {
  return [b, a];
}

function maxHeapify(arr, index, heapSize) {
  let indexOflargest, leftChildIndex, rightChildIndex;
  indexOflargest = index;
  leftChildIndex = 2 * index + 1;
  rightChildIndex = 2 * index + 2;
  if(heapSize > leftChildIndex && arr[indexOflargest] < arr[leftChildIndex]) {
    indexOflargest = leftChildIndex;
  } 
  if(heapSize > rightChildIndex && arr[indexOflargest] < arr[rightChildIndex]) {
    indexOflargest = rightChildIndex;
  } 
  if(indexOflargest !== index) {
    [arr[indexOflargest], arr[index]] = swap(arr[indexOflargest], arr[index]);
    maxHeapify(arr, indexOflargest, heapSize);
  }
}

function buildMaxHeap(arr) {
  for(let i= Math.floor(arr.length / 2); i>=0; i--) {
    maxHeapify(arr, i, arr.length);
  }
}

function heapSort(arr) {
  buildMaxHeap(arr);
  let size = arr.length;
  for(let i= size - 1; i > 0; i--) {
    [arr[0],arr[i]] = swap(arr[0],arr[i]);
    size--;
    maxHeapify(arr, 0, size);
  }
  return arr;
}

// const arr = [9,8,7,6,5,4,3,2,1,0];
const arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(heapSort(arr));