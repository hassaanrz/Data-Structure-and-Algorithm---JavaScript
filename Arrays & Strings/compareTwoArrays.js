let arr1, arr2;
arr1 = ["a", "b", "c", "d"];
arr2 = ["e", "f", "g", "a"];

/*** Method 1 ***/

// function compareTwoArrays(arr1, arr2) {
//   for(let i=0; i<arr1.length ; i++) {
//     for(let j=0; j< arr2.length; j++) {
//       if(arr1[i] == arr2 [j])
//         return true;
//     }
//   }
//   return false;
// }

/*** Method 2 ***/

// function compareTwoArrays(arr1, arr2) {
//   let obj = {};
//   for(let i=0; i< arr1.length ; i++) {
//     if(!obj[arr1[i]]) {
//       obj[arr1[i]] = true;
//     }
//   }
//   for(let j=0; j< arr2.length; j++) {
//     if(obj[arr2 [j]])
//       return true;
//     }
//   return false;
// }

/*** Method 3 ***/

function compareTwoArrays(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
console.log(compareTwoArrays(arr1, arr2));
