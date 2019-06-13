const maxElement = function(arr) {
	let max = arr[0];
	arr.forEach(cur => {
		if(cur>max) {
			max = cur;
		}
	});
	return max;
}

const maximumSumSubArray = function(arr) {
	const len = arr.length;
	let ans=0, sum=0;
	const max = maxElement(arr);
	if(max <= 0) {
		return max;
	} else {
		for(let i=0;i<len;i++){
			if(sum+arr[i] > 0) {
				sum = sum + arr[i];
			} else {
				sum = 0;
			}
                        ans = Math.max(sum, ans);
		}

		return ans;	
	}
}

const arr1 =[1, -2, 3, -3, 5, 6];

const arr2 =[-1, -2, -3, -3, -5, -6];

console.log(maximumSumSubArray(arr1));

console.log(maximumSumSubArray(arr2));
