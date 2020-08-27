/**
 * Instructions:
 * Sort "array" so that all elements with the value of zero are moved to the
 * end of the array, while the other elements maintain order.
 *  [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
 * Zero elements also maintain order in which they occurred.
 * [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
 * Do not use any temporary arrays or objects. Additionally, you're not able
 * to use any Array or Object prototype methods such as .shift(), .push(), etc
 * the correctly sorted array should be returned.
 * 
 * @param {*} array - input array of elements
 */

 // Moves all elements in the input array that are equal to 0 or '0' to the end of the array in the order they occurred, preserves order of non-zero elements. 
function removeZeros(array) { 
    var endOfArray = array.length;
    for (var x = 0; x < endOfArray; x++) {
      if (array[x] === 0 || array[x] === '0') {
        var zero = array[x];
        var i = x;
        for (i; i < array.length-1; i++) {        
          array[i] = array[i+1]; 
        }
        array[array.length-1] = zero;
        x--;
        endOfArray--;
      }
    }
    return array;
  }