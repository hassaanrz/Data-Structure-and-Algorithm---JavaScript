const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

function mergeSortedArrays(array1, array2) {
  // Check Input
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  let i=1, j=1, array1Item, array2Item;
  const mergedArray = [];
  array1Item = array1[0];
  array2Item = array2[0];

  while(array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } 
    else if(!array1Item || array2Item <= array1Item) {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}
console.log(mergeSortedArrays(arr1, arr2));