let calculations1, calculations2, calculations3;
calculations1 = 0;
calculations2 = 0;
calculations3 = 0;

/** TOP DOWN APPROACH WITH MEMOIZATION FOR OPTIMIZATION**/
function memoizedFibonacci() {
  let cache = {};
  return function fib(n) {
    calculations1++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

/** RECURSIVE SIMPLE FIBONACCI **/
function fibonacci(n) {
  calculations2++;
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/** BOTTOM UP APPROACH FOR OPTIMIZATION **/
function fib(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculations3++;
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.pop();
}

const dpFibonacci = memoizedFibonacci();
console.log("DP", dpFibonacci(100));
console.log("No. of calculations done: " + calculations1);

console.log("Simple", fibonacci(35));
console.log("No. of calculations done: " + calculations2);

console.log("Bottom Up Approach", fib(100));
console.log("No. of calculations done: " + calculations3);
