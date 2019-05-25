str = "I am Hassaan";

/***** Method 1 *****/
// function reverseString(str) {
//   if(typeof str !== "string" || str.length < 2 || !str) {
//     console.log("Invalid Input!");
//     return;
//   }
//   let revStr = "";
//   for(let i=0; i< str.length ; i++) {
//     revStr = str[i] + revStr; 
//   }
//   return revStr;
// }

/***** Method 2 *****/

// function reverseString(str) {
//   if(typeof str !== "string" || str.length < 2 || !str) {
//     console.log("Invalid Input!");
//     return;
//   }
//   const backwards = [];
//   const totalItems = str.length - 1;
//   for(let i=totalItems; i>= 0 ; i--) {
//     backwards.push(str[i]); 
//   }
//   return backwards.join('');
// }

/***** Method 3 *****/
// function reverseString(str) {
//   if(typeof str !== "string" || str.length < 2 || !str) {
//     console.log("Invalid Input!");
//     return;
//   }
//   return str.split('').reverse().join('');
// }

/***** Method 4 *****/
const reverseString = str => {
  if(typeof str !== "string" || str.length < 2 || !str) {
    console.log("Invalid Input!");
    return;
  }
  return [...str].reverse().join('');
}

console.log(reverseString(str));