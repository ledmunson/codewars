/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

// Javascript

// My initial solution.
function XO(str) {
    // Initialize variables to count X's and O's. 
    var exes = 0;
    var ohs = 0;

    // Clean up and format the input string.
    str = str.toLowerCase();
    str = str.trim();
    str = str.split("");

    // Count the number of X's and O's.
    for (i=0;i<str.length;i++) {
      if (str[i] == "x") {
        exes++;
      }
      else if (str[i] == "o") {
        ohs++;
      }
    }

    // Return true if number of X's equals number of O's. Return false if not.
    if (exes == ohs) {
      return true;
    }
    else {
      return false;
    }
}

// Best practice.
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
