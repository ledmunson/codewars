/**
 * Instructions:
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
 * For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
 * As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.
 * For example, the input 'sTreSS' should return 'T'.
 * If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

// My soltution.
// Return first non-repeating letter in an input string.
function firstNonRepeatingLetter(s) {
    // Split input string into array of substrings.
    let chars = s.split("");
    // Initialize a variable to store the answer. 
    let ans = '';
    // Iterate through the "chars" array to find any case-insensitive matches to the current element.
    for (var i = 0; i < chars.length; i++) {
      var regex = new RegExp(chars[i], 'gi');
      // Store any matches in a new array.
      let arr = s.match(regex);
      /**
       * If there is only one element in the array, we assume that element is unique.
       * Stop after the first unique element is found.
       */
      if (arr.length == 1) {      
        ans = arr.toString();      
        break;      
      } 
    }
    return ans;
  }

  // Best practice.
  function firstNonRepeatingLetterTwo(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }