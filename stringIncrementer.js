/**
 * Instructions:
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 */

 // My solution.
function incrementString (strng) {

  // Break up the input string into numbers and letters.
  let nums = strng.match(/\d+/);
  let letters = strng.match(/\D+/);

  // If there are no letters, set "letters" variable to "".
  if (letters == null) {letters = "";}

  // Check if there are numbers present in the input string. 
  if (/\d/.test(strng)) {
    // Check if nums starts with a 9, if true then add an extra "0" to the beginning of the "nums" string.
    if (/^9/.test(nums[0])) {nums[0] = "0"+ nums[0];}
    let temp = nums;
    // Convert the "nums" string into integer and add 1. 
    temp = parseInt(temp);
    temp = temp + 1;
    // Then, convert this back into a string and add it to the end of the "letters" variable. 
    temp = temp.toString();
    while (nums[0].length != temp.length) {
      temp = "0" + temp;
    }
    // Add Return this string as the answer.
    return letters + temp;
  }
  // If there are no numbers present in the input string, add "1" to the end of the input string and return.
  else {return strng + "1";}
}

// Best practice.
function incrementStringTwo(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }