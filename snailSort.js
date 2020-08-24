/**
 * Instructions:
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 * array = [[1,2,3],
            [4,5,6],
            [7,8,9]]
 * snail(array) #=> [1,2,3,6,9,8,7,4,5]
 * For better understanding, please follow the numbers of the next array consecutively:
 * array = [[1,2,3],
            [8,9,4],
            [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 */

 /**
  * My solution is below. Below that is the best practice per the codewars.com community.
  * I learned about shallow versus deep copies in Javascript as part of this challenge. I wanted to avoid mutating the input data as I read that is best practice (unless required).
  * I also got lots of practice with functional programming using array methods like forEach() and arrow (AKA lambda) functions. I was purposefully doing this for practice instead 
  * of using for loops.
  */


/**
 * @param {*} array - an array of arrays
 */

snail = function(array) {

    // Make a deep copy of the input array of arrays for processing.
    var copyArray = JSON.parse(JSON.stringify(array))
    
    // Create an empty array to hold the values until we are ready to return it as the solution.
    var solution = [];
    
    // Loop, while copyArray.length > 0
    while (copyArray.length > 0) {
      
        // Push 1st array in copyArray into "solution."
        copyArray[0].forEach(element => solution.push(element));
        
        // Delete the 1st array from copyArray
        copyArray.shift();
        
        // Push the last element from each remaining array into "solution."
        copyArray.forEach(element => {
          solution.push(element[element.length-1]);
          // Delete the elements of "copyArray" that we pushed into "solution."
          element.pop();
        });
        //console.log(copyArray.length)
        
        // Reverse the last array in "copyArray" and push its elements into "solution"
        if (copyArray.length > 0) { copyArray[copyArray.length-1].reverse().forEach(element => solution.push(element)); }
        //console.log(solution)
        
        // Delete the last array in "copyArray."
        copyArray.pop();
        
        // Copy the first element of each remaining array in "copyArray" into an array called "tempArray."
        let tempArray = [];
        copyArray.forEach(element => {
          tempArray.push(element[0]);
          // Delete the first element of each array in "copyArray."
          element.shift()
        }); 
        
        // Reverse "tempArray"
        tempArray.reverse()    
        
        // Push each element of "tempArray" into "solution."
        tempArray.forEach(element => solution.push(element));
    }
    return solution;
}

/**
 * Best practice below.
 * The algorithm used was the same as mine, but the implementation was more elegant - less lines of code to accomplish the same goal.
 */
snailTwo = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }