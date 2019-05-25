function sizeOflongestElement(arr) {
  let long = 0;
  for(let i = 0; i < arr.length; i++) {
    long = (arr[i].toString().length) > long ? (arr[i].toString().length) : long;
  }
  return long;
}

function getLocation(cur, place) {
  let string,location;
  string = cur.toString();
  location = string[place] || 0;
  return location;
}

function radixSort(arr) {
  let long = sizeOflongestElement(arr);
  let buckets = new Array(10).fill().map(() => []);
  for(let i = 0; i< long; i++) {
    while(arr.length) {
      let current = arr.shift();
      buckets[getLocation(current, i)].push(current);
    }
    for(let j = 0; j <= 9; j++) {
      while(buckets[j].length) {
        arr.push(buckets[j].shift());
      }
    }
  }
  return arr; 
}

// const arr = [9,8,7,6,5,4,3,2,1,0];
const arr = [9, 55, 398, 4, 11, 1];
console.log(radixSort(arr));

// const arr = new Array(10).fill([]);
// arr[0].push(10);
// arr[5].push(20);
// console.log(arr);
// console.log('Dusra');
// const arr1 = new Array(10).fill().map(() => []);
// arr1[0].push(10);
// arr1[2].push(20);
// console.log(arr1);