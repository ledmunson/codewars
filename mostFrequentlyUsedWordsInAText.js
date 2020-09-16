/**
 * Instructions:
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
 * Assumptions:
 * A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
 * Matches should be case-insensitive, and the words in the result should be lowercased.
 * Ties may be broken arbitrarily.
 * If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
 * 
 * @param {*} text - input string
 */

function topThreeWords(text) {
    // Copy the original text to a variable and transform it to be in all lowercase letters. toLowerCase() returns a new string (i.e. it is non-mutating).
    var str = text.toLowerCase();
    // Create an array of words from "str." The regular expression accounts for words with apostrophes.
    var temp = str.match(/[a-z]+[']?[a-z]?/g);
    // Create a new array which contains only unique words from "temp."
    var unique = [...new Set(temp)];
    // Create an empty array that will hold the number of times each unique word appears in "str."
    var counts = [];
    // Create an empty array that will hold the words that appear the most, in descending order.
    var solution = [];
    
    // Add a single space character at the beginning and end of the "temp" array. This allows the regular expression "regex" that is defined further below to work properly.
    if (temp != null) { 
      temp.unshift(" ");
      temp.push(" ");
      // Combine the temp array back into a single string.
      temp = temp.join(" ");
    }
    
    // Loop through the "unique" array.
    for (var e of unique) {
      // Create a regular expression that matches to each word so long as the word is preceded and followed by a single white space character. 
      let regex = new RegExp('(?<=\\s)' + e + '(?=\\s)', 'g');
      // Push the number of times that each word appears in the "temp" string to the "counts" array.
      counts.push(temp.match(regex).length);
      
    }
    
    for (var i = 0; i < 3; i++) {
      if (counts.length > 0) {
        // Determine the index of the word that appears the most.
        var max = Math.max(...counts);
        var index = counts.indexOf(max);
        // Add the word that appears the most to the "solution" array.
        solution.push(unique[index]);
        // Remove the count of the word that appears the most from the "counts" array.
        counts.splice(index,1);
        // Remove the word that appears the most from the "unique" array. This is done to keep the sizes of the "counts" and "unique" arrays in sync.
        unique.splice(index,1);
      }
    }
    return solution;
  }