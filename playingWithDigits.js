/**
 * Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
 * we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
 * In other words:
 * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
 * If it is the case we will return k, if not return -1.
 * Note: n and p will always be given as strictly positive integers.
 */

 // My solution.
 function digPow(n, p){
    /** 
     * "arr" will be used to store input "n" as an array of single digits.
     * "x" will be used to store the value of (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...)
     * "z" is a copy of "n" that will be modified.
     */
    let arr = [];
    let x = 0;
    let z = n;
    
    // Decompose "n" into an array of single digits.
    while (z > 0) {
      arr.unshift(z % 10);
      z = Math.floor(z/10);
    }
    
    // Iterate over the array and apply the powers and calculate the sum, then store the sum in "x".
    for (i in arr) {
        x = x + Math.pow(arr[i],p);
        p++;
      }
    
    // If "x" can be divided by "n" with no remainder then the conditional evaluates to false, and we return x / n (because k = x/n).
    return x % n ? -1 : x / n
  }

  // Best practice.
  function digPowTwo(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }