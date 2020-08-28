/**
 * Instructions:
 * Complete the solution so that it strips all text that follows any of a set of comment 
 * markers passed in. Any whitespace at the end of the line should also be stripped out. 
 * 
 * @param {*} input - input string with comment markers 
 * @param {*} markers - the comment markers
 */

 // My solutuion.
function solution(input, markers) {
    
    // Split the input string into substrings.
    var temp = input.split("\n");
    
    // Create empty array to hold processed substrings.
    var lines = [];
    
    // Create regular expression that matches to portion of substring preceding the comment marker.
    var regex = new RegExp('.+(?=[' + markers.join("") + '])')
    
    /**
     * If a match to the regular expression is found, push the returned value to the "lines" array.
     * If no match is found, push the entire substring to "lines" array.
     */ 
    for (element of temp) {
      regex.test(element) ? lines.push(element.match(regex)[0].trim()) : lines.push(element);
    }
    
    return lines.join("\n")
};

// Best practice.
function solutionTwo(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }