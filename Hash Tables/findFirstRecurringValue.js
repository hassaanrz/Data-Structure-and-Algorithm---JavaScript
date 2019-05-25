let array1 = [2,5,1,2,3,5,1,2,4];
let array2 = [2,1,1,2,3,5,1,2,4];
let array3 = [2,3,4,5];

/***** Method 1 *****/
// function findFirst(arr) {
//   let item, min= arr.length;
//   for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++) {
//       let diff=Math.abs(i-j);
//       if(arr[i] === arr[j] && diff< min) {
//         min=diff;
//         item=arr[i];
//       }   
//     }
//   }
//   if(min < arr.length)
//     return item;
//   else
//     return undefined;
// }

/***** Method 2 *****/
function findFirst(arr) {
  let obj = {};
  for(let i=0; i<arr.length; i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = true;
    } else
      return arr[i];
  }
  return undefined;
}

console.log(findFirst(array2));
