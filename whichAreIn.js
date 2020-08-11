/**
 * Instructions:
 * Given two arrays of strings "a1" and "a2" return a sorted array "r" in lexicographical order of the strings of "a1" which are substrings of strings of "a2".
 */

/**
 * My solution.
 * Determines if strings of "array1" are substrings of "array2" and returns those strings sorted in lexicographical order.
 */
function inArray(array1,array2){
    // Initialize empty array to return as function output.
    let r = [];
    // Join "array2" into one long string, separated by spaces.
    let str = array2.join(" ");
    // Iterate through "array1" and use a regular expression to match those strings that are substrings of "array2".
    for (var i in array1) {
        let regex = new RegExp('\w*'+array1[i]+'\w*', 'i');    
        // If regular expression criteria is met, add the element to array "r".
        if (regex.test(str)) {
        r.push(array1[i]);  
        }
    }
    // Return the sorted "r" array.
    return r.sort();
}

// Best practice.
function inArray(arr1, arr2) {
    return arr1.filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    }).sort();
}