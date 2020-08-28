/**
 * Instructions:
 * Complete the solution so that it strips all text that follows any of a set of comment 
 * markers passed in. Any whitespace at the end of the line should also be stripped out. 
 * 
 * @param {*} input - input string with comment markers 
 * @param {*} markers - the comment markers
 */

function solution(input, markers) {
    var temp = input.split("\n");
    var lines = [];
    var regex = new RegExp('.+(?=[!@#$%&*-])')
    for (element of temp) {
      regex.test(element) ? lines.push(element.match(regex)[0].trim()) : lines.push(element);
    }
    return lines.join("\n")
};