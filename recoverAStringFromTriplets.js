/**
 * Instructions:
 * There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
 * A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
 * As a simplification, you may assume that no letter occurs more than once in the secret string.
 * You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. 
 * In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
 * 
 * @param {*} triplets - an array of arrays that contain the triplets
 */

var recoverSecret = function(triplets) {
    // Loop through the first letter in each triplet.
    for (var [first] of triplets) {
      // Check to see if the first letter of the triplet only appears as the first letter in all of the other triplets.
      if (triplets.every(triplet => triplet.indexOf(first) <= 0)) {
        // If so, remove that letter from each triplet in "triplets."
        triplets.filter(([item]) => item == first).forEach( triple => triple.shift());
        // Add the letter to a string that will be returned as the answer and get rid of any empty triplet arrays. Then pass the updated arrays to the recursive call of the function.
        return first + recoverSecret(triplets.filter(triple => triple.length > 0));
      }  
    }
    return '';
  }