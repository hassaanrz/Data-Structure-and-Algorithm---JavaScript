
/********************** METHOD 1 *************************/
function merge(left, right) {
  let arr = [];
  let lenL, lenR; 
  lenL = left.length;
  lenR = right.length;
  let i = 0, j=0, k=0;
  while(i < lenL && j < lenR) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while(i < lenL) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while(j < lenR) {
    arr[k] = right[j];
    j++;
    k++;
  }
  return arr;
}

function mergeSort (arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = parseInt(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, len); 
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

//const arr = [9,8,7,6,5,4,3,2,1,0]; 
// const arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
const arr = [3,2,5,9,1];
console.log(mergeSort(arr));


/********************** METHOD 2 *************************/

// function merge (left, right) {
//   let result = [];
//   let indexLeft = 0;
//   let indexRight = 0;

//   while (indexLeft < left.length && indexRight < right.length) {
//     if (left[indexLeft] <= right[indexRight]) {
//       result.push(left[indexLeft]);
//       indexLeft++;
//     } else {
//       result.push(right[indexRight]);
//       indexRight++;
//     }
//   }
//   result = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
//   return result;
// }

// function mergeSort (arr) {
//   let len = arr.length;
//   if (len < 2) {
//     return arr;
//   }
//   const mid = parseInt(len / 2);
//   const left = arr.slice(0, mid); 
//   const right = arr.slice(mid, len); 
//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   );
// }

// //const arr = [9,8,7,6,5,4,3,2,1,0]; 
// const arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// console.log(mergeSort(arr));
