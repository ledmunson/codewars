/**
 * Instructions:
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. 
 * Overlapping intervals should only be counted once.
 * Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. 
 * Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 * @param {*} intervals - input array of intervals (an array of arrays).
 */

 // My solution.
function sumIntervals(intervals){
  // Deep copy "intervals" to avoid mutating the original input.
  var temp = JSON.parse(JSON.stringify(intervals));
  
  // Initialize a variable to store the sum of the intervals.
  var solution = 0;
  
  // Sort the intervals in ascending order.
  temp.sort(function(a, b) {
    return a[0] - b[0];
  });
  
  // Iterate through the deep copy of the "intervals" array.
  for (var i = 0; i < temp.length-1; i++) {
    // Check to see if there is an overlap between two intervals, starting with the first interval and comparing it with the next. 
    if (temp[i][1] >= temp[i+1][0] || temp[i][1] >= temp[i+1][1]) {
      // Check to see if the end of the first interval is smaller or equal to the end of the second interval.
      if (temp[i][1] <= temp[i+1][1]) {
        // Set the end of the first interval to the end of the second interval, as the second interval is larger or the same size.
        temp[i][1] = temp[i+1][1];
      }
      // Remove the second interval from the deep copy. If the end of the first interval is larger than the end of the second interval, the second interval should be discarded anyways.
      temp.splice(i+1, 1);
      // Reset the index so it repeats the comparison using the current interval.
      i--;
    }
  }
  // Iterate through the remaining intervals in the "temp" array.
  for (var x = 0; x < temp.length; x++) {
    // Add the size of each interval to the "solution" variable.
    solution = solution + (temp[x][1] - temp[x][0]);
  }
  return solution;
}