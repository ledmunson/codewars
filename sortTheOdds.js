/** 
 * Instructions:
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their places.
 * Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
*/

// My solution.
function sortArray(array) {
    // Initialize temporary array to hold odd numbers. 
    var temp = [];
    
    // Iterate through input array, replace odd numbers with placeholders, and push odd numbers to temporary array.
    for (var i = 0; i < array.length; i++) {
      if ((array[i] % 2) == 1) {
        temp.push(array[i]);
        array.splice(i,1,"x");
      }
    }
    
    // Sort the odd numbers into ascending order.
    temp.sort(function(a, b){return a-b});
    
    // Initialize an index variable to use with the temp array.
    let j = 0;
    
    // Iterate through the input array, replacing the placeholders with the sorted odd numbers.
    for (var i = 0; i < array.length; i++) {
      if (array[i] == "x") {
        array.splice(i,1,temp[j]);
        j++;
      }
    }
    
    // Return the sorted array.
    return array;
}

// Best practice.
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }