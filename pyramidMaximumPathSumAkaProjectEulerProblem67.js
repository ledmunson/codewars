/**
 * Instructions:
 * Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23
 * Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' largest 'slide down'.
 * My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. 
 * You must come up with something more clever than that. This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.
 */

// My solution using dynamic programming.
// Return the largest path downward given an input pyramid of size n.
function longestSlideDown (pyramid) {
    
    // Iterate over each level of the pyramid.
    for (var i = 1; i < pyramid.length; i++) {
      
        // Iterate over each element in the current pyramid level.
      for (x in pyramid[i]) {
        
        // Replace the first element of the current pyramid level with the sum of itself and the first element of the preceding level.
        if (x == 0) {
          pyramid[i][x] += pyramid[i-1][x];
        }
        
        // Replace the last element of the current level with the sum of itself and the last element of the preceding level.
        else if (x == pyramid[i].length-1) {
          pyramid[i][x] += pyramid[i-1][x-1];
        }
        
        /** Replace any middle element by comparing the sum of itself and the element of the preceding level at the current index minus 1, 
          * and the sum of itself and the element of the preceding level at the same index and returning the larger of the two.
          */   
        else {
          pyramid[i][x] = Math.max((pyramid[i-1][x-1]+pyramid[i][x]), (pyramid[i-1][x]+pyramid[i][x]));
        }
      }
    }

    // Return the largest element of the bottom level of the pyramid, which will represent the largest path downward.
    return Math.max(...pyramid[pyramid.length-1]);
  }

  // Best practice.
  function longestSlideDownTwo (pyramid) {
    return pyramid.reduceRight((last,current)=>current.map(
      (v,i)=>v+Math.max(last[i],last[i+1])
    ))[0];
  }