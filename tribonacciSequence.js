/**
 * Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, 
 * returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers; 
 * n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
 */

 // My solution.
function tribonacci(signature,n){
    // iterate until "signature" array has n elements.
    for (var i = 3; i < n; i++) {
      signature.push(signature[i-3]+signature[i-2]+signature[i-1])
    }
    // return elements in the array from index 0 up to n.
    return signature.slice(0,n);
  }

// Best practice.
function tribonacci(signature,n){  
for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
}
return signature.slice(0, n); //return trib - length of n
}