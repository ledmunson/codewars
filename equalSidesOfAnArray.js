/**
 * Instructions:
 * You are going to be given an array of integers. 
 * Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
 * If there is no index that would make this happen, return -1.
 */

function findEvenIndex(arr)
{
  // Iterate over the input array until an index is found such that the sum of integers below the index and the sum of integers above the index are equal.
  for (x in arr) {
    // Create a new temporary array of the integers below the current index. If there are no integers below the index, push a 0 into the array. 
    let a = arr.slice(0,x); 
    if (a.length == 0) {a.push(0);}
    // Sum the integers in the temporary array and assign that value to "sumA".
    let sumA = a.reduce( (total, num) => total + num);
    
    // Create a new temporary array of the integers above the current index. If there are no integers above the index, push a 0 into the array.
    let b = arr.slice(parseInt(x)+1);
    if (b.length == 0) {b.push(0);}
    // Sum the integers in the temporary array and assign that value to "sumB".
    let sumB = b.reduce( (total, num) => total + num);
    
    // Check to see if the sums equal each other, if they do then return the current index as the answer.
    if (sumA == sumB) {return parseInt(x);}
  }
  // If such an index cannot be found, return -1.
  return -1;
}

// Best practice.
function findEvenIndexTwo(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}